import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Πληροφορίες Ξενοδοχείου",
    prompt: "Θα ήθελα περισσότερες πληροφορίες για τις παροχές του ξενοδοχείου.",
    icon: "book-open",
  },
  {
    label: "Σχετικά με την περιοχή.",
    prompt: "Τι επιλογές μου δίνει η περιοχή του ξενοδοχείου Ίλιον στην Παραλία Κατερίνης;.",
    icon: "lightbulb",
  }
];

export const PLACEHOLDER_INPUT = "Συνομιλία με ΑΙ...";

export const GREETING = "Γεια! Είμαι ο ΑΙ Agent του Ξενοδοχείου ΙΛΙΟΝ. Πως μπορώ να βοηθήσω σήμερα;";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
