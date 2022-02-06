const hostApi =
  process.env.NODE_ENV === "development"
    ? "http://localhost"
    : "https://sing-generator-node.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/light-blue-react"
    : "https://demo.flatlogic.com/light-blue-react";

export default {
  redirectUrl,
  hostApi,
  portApi,
  baseURLApi,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: "admin@flatlogic.com",
    password: "password",
  },
  appTokenName: "nucleus-token",
};

export const pageConfigs = {
  hmo: {},
  admin: {
    apps: {
      appsList: "Apps",
      create: "Create New App",
      update: "Update App",
    },
    institutions: {
      usersList: "Institutions",
      create: "Create New Institution",
      update: "Update Institution",
    },
    roles: {
      usersList: "Roles",
      create: "Create New Role",
      update: "Update Role",
    },
    permissions: {
      usersList: "Permissions",
      create: "Create New Permission",
      update: "Update Permission",
    },
    users: {
      usersList: "Users",
      create: "Create New User",
      update: "Update User",
    },
  },
};

export const hmoSideBarItems = [
  {
    header: "Analytics",
    link: "/hmo/analytics",
    index: "analytics",
    childrenLinks: [
      {
        header: "Dashboard",
        link: "/hmo/analytics/dashboard",
      },
      {
        header: "Care History",
        link: "/hmo/analytics/care-history",
      },
      {
        header: "Renewals",
        link: "/hmo/analytics/renewals",
      },
      {
        header: "Approvals",
        link: "/hmo/analytics/approvals",
      },
    ],
  },
  {
    header: "Enrollee Management",
    link: "/hmo/enrolee-management",
    index: "enrolee-management",
    exact: false,
    childrenLinks: [
      {
        header: "Create Enrolee",
        link: "/hmo/enrolee-management/create",
      },
      {
        header: "Individual Enrollees",
        link: "/hmo/enrolee-management/Enrolees",
      },
      {
        header: "Preauthorization",
        link: "/hmo/enrolee-management/preauthorization",
      },
      {
        header: "ID Cards",
        link: "/hmo/enrolee-management/idcards",
      },
      {
        header: "Prospects",
        link: "/hmo/enrolee-management/prospects",
      },
      {
        header: "Corporate Clients",
        link: "/hmo/enrolee-management/corporates",
      },
      {
        header: "Retainers",
        link: "/hmo/enrolee-management/retainers",
      },
    ],
  },
  {
    header: "Case Escalation",
    link: "/admin/apps",
    index: "apps",
    exact: false,
  },
  {
    header: "Plans and Providers",
    link: "/admin/roles",
    index: "roles",
    exact: false,
  },
  {
    header: "Approvals",
    link: "/admin/permissions",
    index: "permissions",
    exact: false,
  },
  {
    header: "Accounts",
    link: "/admin/permissions",
    index: "permissions",
    exact: false,
  },
  {
    header: "Settings",
    link: "/admin/permissions",
    index: "permissions",
    exact: false,
  },
];

export const adminSideBarItems = [
  {
    header: "Users",
    link: "/admin/users",
    index: "users",
  },
  {
    header: "Settings",
    link: "/admin/settings",
    index: "settings",
    exact: false,
  },
];
