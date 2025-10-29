import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Ενημέρωση για Education AI Tutors.",
    prompt: "Θα ήθελα να κλείσω ένα ραντεβού για Education AI Tutors.",
    icon: "book-open",
  },
  {
    label: "Ενημέρωση για Business Workflow Automations.",
    prompt: "Θα ήθελα να κλείσω ένα ραντεβού για Business Workflow Automations.",
    icon: "lightbulb",
  },
  {
    label: "Επίδειξη του League Pro.",
    prompt: "Θα ήθελα να κλείσω ένα ραντεβού για επίδειξη του League Pro.",
    icon: "analytics",
  },
];

export const PLACEHOLDER_INPUT = "Συνομιλία με ΑΙ...";

export const GREETING = "Καλώς Ορίσατε! Πως μπορώ να βοηθήσω σήμερα;";

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
