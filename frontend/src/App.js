import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { ptBR } from "@material-ui/core/locale";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import ColorModeContext from "./layout/themeContext";
import { SocketContext, SocketManager } from './context/Socket/SocketContext';

import Routes from "./routes";

const queryClient = new QueryClient();

const App = () => {
    const [locale, setLocale] = useState();

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const preferredTheme = window.localStorage.getItem("preferredTheme");
    const [mode, setMode] = useState(preferredTheme ? preferredTheme : prefersDarkMode ? "dark" : "light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = createTheme(
        {
            scrollbarStyles: {
                "&::-webkit-scrollbar": {
                    width: '8px',
                    height: '8px',
                },
                "&::-webkit-scrollbar-thumb": {
                    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                    backgroundColor: "#682EE3",
                },
            },
            scrollbarStylesSoft: {
                "&::-webkit-scrollbar": {
                    width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: mode === "light" ? "#F3F3F3" : "#333333",
                },
            },
            typography: {
                fontFamily: [
                    "Inter",
                    "Roboto",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "\"Segoe UI\"",
                    "Helvetica",
                    "Arial",
                    "sans-serif"
                ].join(","),
                h1: { fontWeight: 700, letterSpacing: "-0.02em" },
                h2: { fontWeight: 700, letterSpacing: "-0.02em" },
                h3: { fontWeight: 600, letterSpacing: "-0.01em" },
                h4: { fontWeight: 600 },
                h5: { fontWeight: 600 },
                h6: { fontWeight: 500 },
                subtitle1: { fontWeight: 500 },
                subtitle2: { fontWeight: 500 },
                button: { textTransform: "none", fontWeight: 600 }
            },
            shape: {
                borderRadius: 12
            },
            palette: {
                type: mode,
                primary: { main: mode === "light" ? "#682EE3" : "#7C4DFF" },
                secondary: { main: mode === "light" ? "#00BFA6" : "#64FFDA" },
                textPrimary: mode === "light" ? "#682EE3" : "#FFFFFF",
                borderPrimary: mode === "light" ? "#682EE3" : "#FFFFFF",
                dark: { main: mode === "light" ? "#333333" : "#F3F3F3" },
                light: { main: mode === "light" ? "#F3F3F3" : "#333333" },
                tabHeaderBackground: mode === "light" ? "#EEE" : "#666",
                optionsBackground: mode === "light" ? "#fafafa" : "#333",
				options: mode === "light" ? "#fafafa" : "#666",
				fontecor: mode === "light" ? "#128c7e" : "#fff",
                fancyBackground: mode === "light" ? "#fafafa" : "#333",
				bordabox: mode === "light" ? "#eee" : "#333",
				newmessagebox: mode === "light" ? "#eee" : "#333",
				inputdigita: mode === "light" ? "#fff" : "#666",
				contactdrawer: mode === "light" ? "#fff" : "#666",
				announcements: mode === "light" ? "#ededed" : "#333",
				login: mode === "light" ? "#fff" : "#1C1C1C",
				announcementspopover: mode === "light" ? "#fff" : "#666",
				chatlist: mode === "light" ? "#eee" : "#666",
				boxlist: mode === "light" ? "#ededed" : "#666",
				boxchatlist: mode === "light" ? "#ededed" : "#333",
                total: mode === "light" ? "#fff" : "#222",
                messageIcons: mode === "light" ? "grey" : "#F3F3F3",
                inputBackground: mode === "light" ? "#FFFFFF" : "#333",
                barraSuperior: mode === "light" ? "linear-gradient(to right, #682EE3, #682EE3 , #682EE3)" : "#666",
				boxticket: mode === "light" ? "#EEE" : "#666",
				campaigntab: mode === "light" ? "#ededed" : "#666",
				mediainput: mode === "light" ? "#ededed" : "#1c1c1c",
            },
            props: {
                MuiButton: {
                    disableElevation: true
                }
            },
            overrides: {
                MuiButton: {
                    root: {
                        borderRadius: 12,
                        transition: "background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease"
                    },
                    containedPrimary: {
                        background: mode === "light"
                            ? "linear-gradient(90deg, #682EE3 0%, #7C4DFF 100%)"
                            : "linear-gradient(90deg, #7C4DFF 0%, #9575CD 100%)",
                        "&:hover": {
                            boxShadow: "0 8px 20px rgba(104, 46, 227, 0.35)",
                            transform: "translateY(-1px)"
                        },
                        "&:active": {
                            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                            transform: "translateY(0)"
                        }
                    },
                    outlinedPrimary: {
                        "&:hover": {
                            backgroundColor: mode === "light" ? "rgba(104,46,227,0.06)" : "rgba(124,77,255,0.16)"
                        }
                    }
                },
                MuiButtonBase: {
                    root: {
                        "&.Mui-focusVisible": {
                            boxShadow: `0 0 0 3px ${mode === "light" ? "#00BFA6" : "#64FFDA"}33`
                        }
                    }
                },
                MuiPaper: {
                    rounded: {
                        borderRadius: 16
                    }
                },
                MuiCard: {
                    root: {
                        borderRadius: 16
                    }
                },
                MuiTableHead: {
                    root: {
                        backgroundColor: mode === "light" ? "#F7F7FB" : "#2A2A2A"
                    }
                },
                MuiTableCell: {
                    head: {
                        fontWeight: 700
                    }
                },
                MuiTableRow: {
                    root: {
                        transition: "background-color 0.15s ease",
                        "&:hover td": {
                            backgroundColor: mode === "light"
                                ? "rgba(104,46,227,0.03)"
                                : "rgba(124,77,255,0.12)"
                        }
                    }
                },
                MuiCssBaseline: {
                    "@global": {
                        ".focus-visible:focus": {
                            outline: `3px solid ${mode === "light" ? "#00BFA6" : "#64FFDA"}`
                        }
                    }
                }
            },
            mode,
        },
        locale
    );

    useEffect(() => {
        const i18nlocale = localStorage.getItem("i18nextLng");
        const browserLocale =
            i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

        if (browserLocale === "ptBR") {
            setLocale(ptBR);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("preferredTheme", mode);
    }, [mode]);



    return (
        <ColorModeContext.Provider value={{ colorMode }}>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                  <SocketContext.Provider value={SocketManager}>
                      <Routes />
                  </SocketContext.Provider>
                </QueryClientProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
