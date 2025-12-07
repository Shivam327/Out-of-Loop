import { Screen } from "@/components/ui/Screen";
import { usePromises } from "@/hooks/use-promises";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function HomeScreen() {
  const { promises, loading, error } = usePromises();

  const textPrimary = useThemeColor({}, "text");
  const textSecondary = useThemeColor({}, "textSecondary");
  const surface = useThemeColor({}, "surface");
  const border = useThemeColor({}, "border");
  const errorColor = useThemeColor({}, "error");

  return (
    <Screen>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          marginBottom: 4,
          color: textPrimary,
        }}
      >
        Today’s promises
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: textSecondary,
          marginBottom: 16,
        }}
      >
        Small commitments. Big clarity.
      </Text>

      {loading && (
        <View style={{ marginTop: 16 }}>
          <ActivityIndicator />
        </View>
      )}

      {error && (
        <Text style={{ marginTop: 12, color: errorColor }}>
          {error}
        </Text>
      )}

      <FlatList
        data={promises}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 14,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: border,
              backgroundColor: surface,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "600", color: textPrimary }}>
              {item.title}
            </Text>
            {item.description ? (
              <Text style={{ marginTop: 4, color: textSecondary }}>
                {item.description}
              </Text>
            ) : null}
            <Text
              style={{
                marginTop: 8,
                fontSize: 12,
                color: textSecondary,
              }}
            >
              Status: {item.status}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          !loading ? (
            <Text style={{ marginTop: 24, color: textSecondary }}>
              No promises for today yet.
            </Text>
          ) : null
        }
      />
    </Screen>
  );
}
