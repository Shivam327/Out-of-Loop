import { useThemeColor } from "@/hooks/use-theme-color";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Screen({ children, style }: ScreenProps) {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor,
          paddingHorizontal: 16,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
