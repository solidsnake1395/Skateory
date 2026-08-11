import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { getTheme } from "../../theme";

export default function RegisterScreen() {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme === "dark" ? "dark" : "light");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Registrarse</Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            color: theme.text,
          },
        ]}
        placeholder="Nombre"
        placeholderTextColor={theme.muted}
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            color: theme.text,
          },
        ]}
        placeholder="Correo electrónico"
        placeholderTextColor={theme.muted}
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            color: theme.text,
          },
        ]}
        placeholder="Contraseña"
        placeholderTextColor={theme.muted}
        secureTextEntry
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.primary, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.buttonText, { color: theme.secondary }]}>
          Crear cuenta
        </Text>
      </TouchableOpacity>

      <Link
        href="/(auth)/login"
        asChild
        style={StyleSheet.flatten([styles.link, { borderColor: theme.border }])}
      >
        <TouchableOpacity>
          <Text style={[styles.linkText, { color: theme.text }]}>
            Ya tienes cuenta? Inicia sesión
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  link: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 16,
    alignItems: "center",
  },
  linkText: {
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
  },
});
