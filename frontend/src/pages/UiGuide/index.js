import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorState from "../../components/ErrorState";
import EmptyState from "../../components/EmptyState";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  componentBlock: {
    marginTop: theme.spacing(2),
  },
  buttonRow: {
    display: "flex",
    gap: theme.spacing(2),
    flexWrap: "wrap",
  },
  headerBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1.5),
  },
  headerActions: {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },
}));

const UiGuide = () => {
  const classes = useStyles();

  return (
    <MainContainer>
      <MainHeader>
        <div className={classes.headerBar}>
          <Title variant="h4">Guia Visual de Componentes</Title>
          <div className={classes.headerActions}>
            <TextField
              placeholder="Buscar componente"
              type="search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "gray" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary">
              Ação de exemplo
            </Button>
          </div>
        </div>
      </MainHeader>
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className={classes.section}>
              <Typography variant="subtitle1" color="textSecondary">
                Tipografia e Botões
              </Typography>
              <Paper className={classes.paper} variant="outlined">
                <div className={classes.componentBlock}>
                  <Typography variant="h4">Título H4</Typography>
                  <Typography variant="subtitle1">
                    Subtítulo com subtitle1
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Texto secundário usando body2.
                  </Typography>
                </div>
                <Divider style={{ margin: "16px 0" }} />
                <div className={classes.buttonRow}>
                  <Button variant="contained" color="primary">
                    Primário
                  </Button>
                  <Button variant="outlined" color="primary">
                    Secundário
                  </Button>
                  <Button variant="text" color="primary">
                    Texto
                  </Button>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.section}>
              <Typography variant="subtitle1" color="textSecondary">
                Estados de Carregamento e Erro
              </Typography>
              <Paper className={classes.paper} variant="outlined">
                <div className={classes.componentBlock}>
                  <LoadingSpinner label="Carregando dados de exemplo" />
                </div>
                <Divider style={{ margin: "16px 0" }} />
                <div className={classes.componentBlock}>
                  <ErrorState
                    title="Falha ao carregar"
                    description="Não foi possível carregar este recurso de demonstração."
                    onRetry={() => {}}
                  />
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.section}>
              <Typography variant="subtitle1" color="textSecondary">
                Estado Vazio
              </Typography>
              <Paper className={classes.paper} variant="outlined">
                <EmptyState
                  title="Nenhum item de exemplo"
                  description="Este bloco demonstra o estado vazio padrão utilizado em listas."
                  actionLabel="Ação de exemplo"
                  onAction={() => {}}
                />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.section}>
              <Typography variant="subtitle1" color="textSecondary">
                Tabela Base
              </Typography>
              <Paper className={classes.paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Coluna</TableCell>
                      <TableCell align="center">Descrição</TableCell>
                      <TableCell align="right">Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">Item 1</TableCell>
                      <TableCell align="center">
                        Linha de exemplo usando estilo padrão.
                      </TableCell>
                      <TableCell align="right">
                        <Button size="small" color="primary">
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Item 2</TableCell>
                      <TableCell align="center">
                        Outra linha com alinhamentos diferentes.
                      </TableCell>
                      <TableCell align="right">
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Box>
    </MainContainer>
  );
};

export default UiGuide;
