import {
  AppLayout,
  BreadcrumbGroup,
  SideNavigation,
  Flashbar,
  ContentLayout,
  Header,
  Container,
  Link,
  TopNavigation,
  SpaceBetween,
  FormField,
  Form,
  Button,
  Input,
  Tiles,
  HelpPanel,
  Toggle,
  Alert,
} from "@cloudscape-design/components";
import { applyMode, Mode } from "@cloudscape-design/global-styles";
import { useState, useEffect } from "react";

export default function Home() {
  const [tileValue, setTileValue] = useState("");
  const [useDarkMode, setUseDarkMode] = useState(false);

  useEffect(() => {
    applyMode(useDarkMode ? Mode.Dark : Mode.Light);
  }, [useDarkMode]);

  return (
    <>
      <TopNavigation
        identity={{
          href: "#",
          title: "Sample Service with Cloudscape",
        }}
        utilities={[
          {
            type: "button",
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings",
              },
              {
                id: "settings-project",
                text: "Project settings",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "Customer Name",
            description: "email@example.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Preferences" },
              { id: "security", text: "Security" },
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                ],
              },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
      />
      <AppLayout
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: "Home", href: "#" },
              { text: "Service", href: "#" },
            ]}
          />
        }
        navigationOpen={true}
        navigation={
          <SideNavigation
            header={{
              href: "#",
              text: "Sample Service",
            }}
            items={[{ type: "link", text: `Page #1`, href: `#` }]}
          />
        }
        notifications={
          <Flashbar
            items={[
              {
                type: "info",
                dismissible: true,
                content: "This is an info message.",
                id: "message_1",
              },
            ]}
          />
        }
        toolsOpen={true}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout
            header={
              <Header
                variant="h1"
                info={<Link variant="info">Info</Link>}
                actions={
                  <Toggle
                    onChange={({ detail }) => setUseDarkMode(detail.checked)}
                    checked={useDarkMode}
                  >
                    Dark Mode
                  </Toggle>
                }
              >
                Page header
              </Header>
            }
          >
            <Container
              header={<Header variant="h2">Form container header</Header>}
            >
              <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button formAction="none" variant="link">
                      Cancel
                    </Button>
                    <Button variant="primary">Submit</Button>
                  </SpaceBetween>
                }
              >
                <SpaceBetween direction="vertical" size="l">
                  <Alert statusIconAriaLabel="Warning" type="warning">
                    This is a warning message.
                  </Alert>
                  <FormField label="First field">
                    <Input value="" />
                  </FormField>
                  <FormField label="Second field">
                    <Input value="" />
                  </FormField>
                  <FormField label="Third field">
                    <Tiles
                      onChange={({ detail }) => setTileValue(detail.value)}
                      value={tileValue}
                      items={[
                        {
                          label: "Item 1 label",
                          description: "This is a description for item 1",
                          value: "item1",
                        },
                        {
                          label: "Item 2 label",
                          description: "This is a description for item 2",
                          value: "item2",
                        },
                      ]}
                    />{" "}
                  </FormField>
                </SpaceBetween>
              </Form>
            </Container>
          </ContentLayout>
        }
      />
    </>
  );
}
