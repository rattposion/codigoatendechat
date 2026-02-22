import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoggedInLayout from "../layout";
import LoadingSpinner from "../components/LoadingSpinner";
const Dashboard = lazy(() => import("../pages/Dashboard/"));
const TicketResponsiveContainer = lazy(() => import("../pages/TicketResponsiveContainer"));
const Signup = lazy(() => import("../pages/Signup/"));
const Login = lazy(() => import("../pages/Login/"));
const Connections = lazy(() => import("../pages/Connections/"));
const SettingsCustom = lazy(() => import("../pages/SettingsCustom/"));
const Financeiro = lazy(() => import("../pages/Financeiro/"));
const Users = lazy(() => import("../pages/Users"));
const Contacts = lazy(() => import("../pages/Contacts/"));
const Queues = lazy(() => import("../pages/Queues/"));
const Tags = lazy(() => import("../pages/Tags/"));
const MessagesAPI = lazy(() => import("../pages/MessagesAPI/"));
const Helps = lazy(() => import("../pages/Helps/"));
const ContactLists = lazy(() => import("../pages/ContactLists/"));
const ContactListItems = lazy(() => import("../pages/ContactListItems/"));
const QuickMessages = lazy(() => import("../pages/QuickMessages/"));
const Kanban = lazy(() => import("../pages/Kanban"));
import { AuthProvider } from "../context/Auth/AuthContext";
import { TicketsContextProvider } from "../context/Tickets/TicketsContext";
import { WhatsAppsProvider } from "../context/WhatsApp/WhatsAppsContext";
import Route from "./Route";
const Schedules = lazy(() => import("../pages/Schedules"));
const Campaigns = lazy(() => import("../pages/Campaigns"));
const CampaignsConfig = lazy(() => import("../pages/CampaignsConfig"));
const CampaignReport = lazy(() => import("../pages/CampaignReport"));
const Annoucements = lazy(() => import("../pages/Annoucements"));
const Chat = lazy(() => import("../pages/Chat"));
const ToDoList = lazy(() => import("../pages/ToDoList/"));
const Subscription = lazy(() => import("../pages/Subscription/"));
const Files = lazy(() => import("../pages/Files/"));
const Prompts = lazy(() => import("../pages/Prompts"));
const QueueIntegration = lazy(() => import("../pages/QueueIntegration"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassWord/"));
const UiGuide = lazy(() => import("../pages/UiGuide"));

const Routes = () => {
  const [showCampaigns, setShowCampaigns] = useState(false);

  useEffect(() => {
    const cshow = localStorage.getItem("cshow");
    if (cshow !== undefined) {
      setShowCampaigns(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <TicketsContextProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/forgetpsw" component={ForgetPassword} />
              <WhatsAppsProvider>
                <LoggedInLayout>
                  <Route exact path="/" component={Dashboard} isPrivate />
                  <Route
                    exact
                    path="/tickets/:ticketId?"
                    component={TicketResponsiveContainer}
                    isPrivate
                  />
                  <Route exact path="/connections" component={Connections} isPrivate />
                  <Route exact path="/quick-messages" component={QuickMessages} isPrivate />
                  <Route exact path="/todolist" component={ToDoList} isPrivate />
                  <Route exact path="/schedules" component={Schedules} isPrivate />
                  <Route exact path="/tags" component={Tags} isPrivate />
                  <Route exact path="/contacts" component={Contacts} isPrivate />
                  <Route exact path="/helps" component={Helps} isPrivate />
                  <Route exact path="/users" component={Users} isPrivate />
                  <Route exact path="/files" component={Files} isPrivate />
                  <Route exact path="/prompts" component={Prompts} isPrivate />
                  <Route exact path="/queue-integration" component={QueueIntegration} isPrivate />
                  <Route exact path="/messages-api" component={MessagesAPI} isPrivate />
                  <Route exact path="/settings" component={SettingsCustom} isPrivate />
                  <Route exact path="/kanban" component={Kanban} isPrivate />
                  <Route exact path="/financeiro" component={Financeiro} isPrivate />
                  <Route exact path="/queues" component={Queues} isPrivate />
                  <Route exact path="/announcements" component={Annoucements} isPrivate />
                  <Route exact path="/subscription" component={Subscription} isPrivate />
                  <Route exact path="/chats/:id?" component={Chat} isPrivate />
                  <Route exact path="/ui-guide" component={UiGuide} isPrivate />
                  {showCampaigns && (
                    <>
                      <Route exact path="/contact-lists" component={ContactLists} isPrivate />
                      <Route
                        exact
                        path="/contact-lists/:contactListId/contacts"
                        component={ContactListItems}
                        isPrivate
                      />
                      <Route exact path="/campaigns" component={Campaigns} isPrivate />
                      <Route
                        exact
                        path="/campaign/:campaignId/report"
                        component={CampaignReport}
                        isPrivate
                      />
                      <Route exact path="/campaigns-config" component={CampaignsConfig} isPrivate />
                    </>
                  )}
                </LoggedInLayout>
              </WhatsAppsProvider>
            </Switch>
          </Suspense>
          <ToastContainer autoClose={3000} />
        </TicketsContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
