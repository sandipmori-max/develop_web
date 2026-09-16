import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Bell,
  MessageCircle,
  Users,
  Maximize2,
  ChevronRight,
  Home,
  IndianRupee,
  Droplets,
  Settings,
  Boxes,
  FlaskConical,
  ShoppingCart,
  Receipt,
  Building2,
  MoreHorizontal,
  ExternalLink,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  LogOut,
  User,
  Lock,
  Headphones,
  CalendarDays,
  Clock3,
  BedDouble,
  Activity,
  Stethoscope,
  FileWarning,
  RefreshCw,
  Filter,
  BarChart3,
} from "lucide-react";

import "./Dashboard.css";

/* =========================================================
   TYPES
========================================================= */

interface MenuItem {
  id: string;
  title: string;
  url?: string;
  addUrl?: string;
  menuId?: string;
  children?: MenuItem[];
}

interface SubModule {
  id: string;
  title: string;
  items: MenuItem[];
}

interface Module {
  id: string;
  title: string;
  icon: React.ReactNode;
  subModules?: SubModule[];
  items?: MenuItem[];
}

interface DashboardStat {
  id: number;
  title: string;
  value: string;
  footer: string;
  icon: React.ReactNode;
  tone: string;
}

/* =========================================================
   MODULE DATA
========================================================= */

const modules: Module[] = [
  {
    id: "accounts",
    title: "Accounts",
    icon: <IndianRupee size={19} />,
    subModules: [
      {
        id: "accounts-report",
        title: "Accounts Report",
        items: [
          {
            id: "balance-sheet",
            title: "Balance Sheet",
            url: "accounts/BS.aspx",
          },
          {
            id: "cash-flow-report",
            title: "Cash Flow Report",
          },
          {
            id: "day-book",
            title: "Day Book",
          },
          {
            id: "group-summary",
            title: "Group Summary",
          },
          {
            id: "hdfc-report",
            title: "HDFC Report",
          },
          {
            id: "icici-report",
            title: "ICICI Report",
          },
          {
            id: "ledger-report",
            title: "Ledger Report",
            children: [
              {
                id: "party-outstanding-report",
                title: "Party Outstanding Report",
              },
              {
                id: "profit-loss",
                title: "Profit & Loss",
              },
            ],
          },
          {
            id: "party-outstanding-report-yearly",
            title: "Party Outstanding Report Yearly",
          },
          {
            id: "report-of-problems",
            title: "Report of Problems",
          },
          {
            id: "trial-balance",
            title: "Trial Balance",
          },
        ],
      },
      {
        id: "accounts-trans",
        title: "Accounts Trans",
        items: [
          { id: "bank-reco-entry", title: "Bank Reco Entry" },
          {
            id: "bank-statement-upload",
            title: "Bank Statement Upload",
          },
          { id: "contra", title: "Contra" },
          { id: "credit-note", title: "CreditNote" },
          { id: "debit-note", title: "DebitNote" },
          { id: "fas-stock-list", title: "FAS Stock List" },
          { id: "journal", title: "Journal" },
          { id: "opening-bal", title: "Opening Bal" },
          { id: "payment", title: "Payment" },
          { id: "receipt", title: "Receipt" },
          { id: "tds-challan", title: "TDS Challan" },
        ],
      },
      {
        id: "auditing-reports",
        title: "Auditing Reports",
        items: [
          {
            id: "approval-pending",
            title: "Approval Pending",
          },
        ],
      },
      {
        id: "gst-report",
        title: "GST Report",
        items: [
          { id: "gstr-1", title: "GSTR 1" },
          { id: "gstr-2a", title: "GSTR 2A" },
          { id: "gstr-2b", title: "GSTR 2B" },
          { id: "gstr-3b", title: "GSTR 3B" },
        ],
      },
    ],
  },

  {
    id: "blood-bank",
    title: "Blood Bank",
    icon: <Droplets size={19} />,
    subModules: [
      {
        id: "blood-bank-module",
        title: "Blood Bank",
        items: [
          {
            id: "blood-bank-inward",
            title: "Blood Bank Inward",
          },
          {
            id: "sales-invoice-blood-bank",
            title: "Sales Invoice Blood Bank",
          },
        ],
      },
    ],
  },

  {
    id: "config",
    title: "Config",
    icon: <Settings size={19} />,
    subModules: [
      {
        id: "config-module",
        title: "Config",
        items: [
          { id: "all-doctor-report", title: "All Doctor Report" },
          { id: "app-menu-config", title: "App Menu Config" },
          { id: "app-page", title: "App Page" },
          { id: "barcode-type", title: "Barcode Type" },
          { id: "branch-master", title: "BranchMaster" },
          { id: "city-master", title: "City Master" },
          {
            id: "company-master-invoice",
            title: "Company Master (invoice)",
          },
          {
            id: "company-master",
            title: "CompanyMst",
          },
          {
            id: "country-master",
            title: "Country Master",
          },
          {
            id: "crystal-report-list",
            title: "Crystal Report List",
          },
          {
            id: "daily-entry-list",
            title: "Daily Entry List",
          },
          {
            id: "dashboard",
            title: "DashBoard",
          },
          {
            id: "db-sync-table-master",
            title: "DBSync Table Master",
          },
          {
            id: "dev-page-setting",
            title: "DevPage Setting",
          },
          {
            id: "doctor-wise-reports",
            title: "DoctorWise Reports",
          },
          {
            id: "doctor-wise-reports-pharmacy",
            title: "DoctorWise Reports Pharmacy",
          },
          {
            id: "form-master",
            title: "Form Master",
          },
          {
            id: "grid-report-list",
            title: "Grid Report List",
          },
          {
            id: "gst-masters",
            title: "GST Masters",
          },
          {
            id: "module-mst",
            title: "Module Mst",
          },
          {
            id: "payment-terms-list",
            title: "Payment Terms List",
          },
          {
            id: "printer-mst",
            title: "PRINTER MST",
          },
          {
            id: "property-master",
            title: "Property Master",
          },
          {
            id: "report-list",
            title: "Report List",
          },
          {
            id: "sms-email-setting",
            title: "SMS EMAIL SETTING",
          },
          {
            id: "state-master",
            title: "State Master",
          },
          {
            id: "voucher-master",
            title: "Voucher Master",
          },
          {
            id: "walk-in-party",
            title: "Walk in Party",
          },
        ],
      },
    ],
  },

  {
    id: "masters",
    title: "Masters",
    icon: <Building2 size={19} />,
    subModules: [
      {
        id: "accounts-master",
        title: "Accounts Master",
        items: [
          {
            id: "acc-config-parameter",
            title: "Acc Config Parameter",
          },
          {
            id: "asset-register",
            title: "Asset Register",
          },
          {
            id: "financial-year",
            title: "Financial Year",
          },
          {
            id: "group-master",
            title: "Group Master",
          },
          {
            id: "ledger-master",
            title: "Ledger Master",
          },
          {
            id: "ledger-merge",
            title: "Ledger Merge",
          },
          {
            id: "tax-class-master",
            title: "Tax Class Master",
          },
          {
            id: "tds-section-master",
            title: "TDS Section Master",
          },
          {
            id: "voucher-type-master",
            title: "Voucher Type Master",
          },
        ],
      },

      {
        id: "hospital-master",
        title: "Hospital Master",
        items: [
          { id: "bed-master", title: "Bed Master" },
          {
            id: "certificate-list",
            title: "Certificate List",
          },
          {
            id: "department-master",
            title: "Department Master",
          },
          {
            id: "description-master",
            title: "Description Master",
          },
          {
            id: "diagnosis-master",
            title: "Diagnosis Master",
          },
          {
            id: "dialysis-master",
            title: "Dialysis Master",
          },
          {
            id: "doctor-list",
            title: "Doctor List",
          },
          {
            id: "doctor-wise-patient-master-list",
            title: "Doctor Wise Patient Master List",
          },
          {
            id: "echo-master-list",
            title: "Echo Master List",
          },
          {
            id: "estimate-charge-list",
            title: "Estimate Charge List",
          },
          {
            id: "history-master",
            title: "History Master",
          },
          {
            id: "insurance-master",
            title: "Insurance Master",
          },
          {
            id: "issue-certificate-list",
            title: "Issue Certificate List",
          },
          {
            id: "issue-echo-certificate",
            title: "Issue Echo Certificate",
          },
          {
            id: "ot-list",
            title: "OT List",
          },
          {
            id: "package-master",
            title: "Package Master",
          },
          {
            id: "patient-master",
            title: "Patient Master",
          },
          {
            id: "room-type",
            title: "Room Type",
          },
          {
            id: "service-master",
            title: "Service Master",
          },
          {
            id: "service-type-master",
            title: "Service Type Master",
          },
          {
            id: "symptoms-master",
            title: "Symptoms Master",
          },
          {
            id: "tpa-list",
            title: "TPA List",
          },
          {
            id: "treatment-card-mst",
            title: "Treatement Card Mst",
          },
        ],
      },

      {
        id: "stores-master",
        title: "Stores Master",
        items: [
          {
            id: "diag-for-med",
            title: "Diag. for Med.",
          },
          {
            id: "godown-master",
            title: "Godown Master",
          },
          {
            id: "item-company-list",
            title: "Item Company List",
          },
          {
            id: "item-list",
            title: "Item List",
          },
          {
            id: "item-list-batch-wise",
            title: "Item List Batch Wise",
          },
          {
            id: "item-report",
            title: "Item Report",
          },
          {
            id: "item-type-master",
            title: "Item Type Master",
          },
          {
            id: "merge-item",
            title: "Merge Item",
          },
          {
            id: "unit-of-measurement",
            title: "Unit of Measurement",
          },
        ],
      },
    ],
  },

  {
    id: "hospital",
    title: "Hospital",
    icon: <Home size={19} />,
    subModules: [
      {
        id: "abha",
        title: "ABHA",
        items: [
          {
            id: "abha-patient-master",
            title: "ABHA Patient Master",
          },
          {
            id: "abha-patient-web",
            title: "ABHA Patient Web",
          },
        ],
      },

      {
        id: "hospital-module",
        title: "Hospital",
        items: [
          {
            id: "admit-lab-list",
            title: "Admit Lab List",
          },
          {
            id: "appointment-list",
            title: "Appointment List",
          },
          {
            id: "appointment-list-new",
            title: "Appointment List New",
          },
          {
            id: "discharge-patient-details",
            title: "Discharge Patient Details",
          },
          {
            id: "discharge-summary",
            title: "Discharge Summary",
          },
          {
            id: "final-bill",
            title: "Final Bill",
          },
          {
            id: "ipd-charges-list",
            title: "IPD Charges List",
          },
          {
            id: "ipd-list",
            title: "IPD List",
          },
          {
            id: "monitoring-sheet-list",
            title: "Monitoring Sheet List",
          },
          {
            id: "opd-dr",
            title: "OPD DR",
          },
          {
            id: "opd-list",
            title: "OPD List",
          },
          {
            id: "ot-note",
            title: "OT Note",
          },
          {
            id: "pending-appointment-list",
            title: "Pending Appointment List",
          },
          {
            id: "pending-pkg",
            title: "Pending PKG",
          },
          {
            id: "procedure-surgery-process",
            title: "Procedure / Surgery Process",
          },
          {
            id: "room-transfer-list",
            title: "RoomTransfer List",
          },
        ],
      },

      {
        id: "hospital-report",
        title: "Hospital Report",
        items: [
          {
            id: "diagnosis-entry",
            title: "Diagnosis entry",
          },
          {
            id: "ipd-deposit-report",
            title: "IPD Deposit Report",
          },
        ],
      },
    ],
  },

  {
    id: "inventory",
    title: "Inventory",
    icon: <Boxes size={19} />,
    subModules: [
      {
        id: "stores-report",
        title: "Stores Report",
        items: [
          {
            id: "current-stock",
            title: "Current Stock",
          },
          {
            id: "item-stock-datewise",
            title: "Item Stock Datewise",
          },
          {
            id: "stock-statement",
            title: "Stock Statement",
          },
        ],
      },

      {
        id: "stores-transaction",
        title: "Stores Transaction",
        items: [
          {
            id: "gatepass-list",
            title: "Gatepass List",
          },
          {
            id: "goods-receive-note",
            title: "Goods Receive Note",
          },
          {
            id: "issue-item-list",
            title: "Issue Item List",
          },
        ],
      },
    ],
  },

  {
    id: "laboratory",
    title: "Laboratory",
    icon: <FlaskConical size={19} />,
    subModules: [
      {
        id: "lab-master",
        title: "Lab Master",
        items: [
          {
            id: "lab-bill-abstract",
            title: "Lab Bill Abstract",
          },
          {
            id: "lab-reports-list",
            title: "Lab Reports List",
          },
          {
            id: "lab-value-list",
            title: "Lab Value List",
          },
          {
            id: "lab-variable-group-list",
            title: "Lab Variable Group List",
          },
          {
            id: "lab-variable-list",
            title: "Lab Variable List",
          },
        ],
      },

      {
        id: "lab-test",
        title: "Lab Test",
        items: [
          {
            id: "lab-bill",
            title: "Lab Bill",
          },
          {
            id: "lab-issue-reports-list",
            title: "Lab Issue Reports List",
          },
          {
            id: "lab-sample-collection",
            title: "Lab Sample Collection",
          },
        ],
      },
    ],
  },

  {
    id: "purchase",
    title: "Purchase",
    icon: <ShoppingCart size={19} />,
    subModules: [
      {
        id: "purchase-transaction",
        title: "Purchase Transaction",
        items: [
          {
            id: "purchase-order",
            title: "Purchase Order",
          },
          {
            id: "purchase-invoice",
            title: "Purchase Invoice",
          },
          {
            id: "purchase-order-mv",
            title: "Purchase Order MV",
          },
          {
            id: "purchase-return-dn",
            title: "Purchase Return DN",
          },
        ],
      },
    ],
  },

  {
    id: "sales",
    title: "Sales",
    icon: <Receipt size={19} />,
    subModules: [
      {
        id: "sales-report",
        title: "Sales Report",
        items: [
          {
            id: "sales-profit",
            title: "Sales Profit",
          },
        ],
      },

      {
        id: "sales-transaction",
        title: "Sales Transaction",
        items: [
          {
            id: "nbd-list",
            title: "NBD List",
          },
          {
            id: "sales-invoice-b2b",
            title: "Sales Invoice B2B",
          },
          {
            id: "sales-invoice-list",
            title: "Sales Invoice List",
          },
          {
            id: "sales-invoice-print-list",
            title: "Sales Invoice Print list",
          },
          {
            id: "sales-return-list",
            title: "Sales Return List",
          },
        ],
      },
    ],
  },
];

/* =========================================================
   OTHER ITEMS
========================================================= */

const otherItems: MenuItem[] = [
  {
    id: "help-file",
    title: "Help File",
  },
  {
    id: "menu-list",
    title: "Menu List",
  },
  {
    id: "calculator",
    title: "Calculator",
  },
];

/* =========================================================
   DASHBOARD STATS
========================================================= */

const dashboardStats: DashboardStat[] = [
  {
    id: 6,
    title: "Appointment",
    value: "83",
    footer: "Today Appointment",
    icon: <CalendarDays size={21} />,
    tone: "blue",
  },
  {
    id: 12,
    title: "Pending Appointment",
    value: "22",
    footer: "Today Appointment",
    icon: <Clock3 size={21} />,
    tone: "orange",
  },
  {
    id: 14,
    title: "OPD List",
    value: "62",
    footer: "Today Report",
    icon: <Users size={21} />,
    tone: "green",
  },
  {
    id: 8,
    title: "Admitted Patient",
    value: "31",
    footer: "Active Admit Patient",
    icon: <BedDouble size={21} />,
    tone: "purple",
  },
  {
    id: 13,
    title: "OT Pending",
    value: "7",
    footer: "OT Patient Pending",
    icon: <Activity size={21} />,
    tone: "red",
  },
  {
    id: 11,
    title: "Today Operation List",
    value: "...",
    footer: "Operation List",
    icon: <Stethoscope size={21} />,
    tone: "teal",
  },
  {
    id: 15,
    title: "Lab Report Pending",
    value: "2",
    footer: "Today Report",
    icon: <FlaskConical size={21} />,
    tone: "orange",
  },
  {
    id: 16,
    title: "Today Gen. LabBill",
    value: "34",
    footer: "Today Report",
    icon: <Receipt size={21} />,
    tone: "green",
  },
  {
    id: 7,
    title: "Patient List",
    value: "70,723",
    footer: "Active Patient",
    icon: <Users size={21} />,
    tone: "blue",
  },
  {
    id: 10,
    title: "Available Doctor",
    value: "27",
    footer: "Available Doctors List",
    icon: <Stethoscope size={21} />,
    tone: "purple",
  },
  {
    id: 19,
    title: "Reports Pending",
    value: "2,537",
    footer: "Today Report",
    icon: <FileWarning size={21} />,
    tone: "red",
  },
];

/* =========================================================
   HELPERS
========================================================= */

const countMenuItems = (
  items: MenuItem[]
): number => {
  return items.reduce(
    (total, item) =>
      total +
      1 +
      (item.children
        ? countMenuItems(item.children)
        : 0),
    0
  );
};

const filterItems = (
  items: MenuItem[],
  value: string
): MenuItem[] => {
  return items
    .map((item) => {
      const children = item.children
        ? filterItems(item.children, value)
        : [];

      if (
        item.title
          .toLowerCase()
          .includes(value) ||
        children.length > 0
      ) {
        return {
          ...item,
          children:
            children.length > 0
              ? children
              : item.children,
        };
      }

      return null;
    })
    .filter(Boolean) as MenuItem[];
};

/* =========================================================
   COMPONENT
========================================================= */

const Dashboard: React.FC = () => {
  /*
   * IMPORTANT
   * true  = Dashboard view
   * false = Module view
   */
  const [showDashboard, setShowDashboard] =
    useState(true);

  const [activeModule, setActiveModule] =
    useState("accounts");

  const [activeSubModule, setActiveSubModule] =
    useState("accounts-report");

  const [search, setSearch] =
    useState("");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [branch, setBranch] =
    useState("KESHOD");

  const [dashboardType, setDashboardType] =
    useState("HOSPITAL");

  const [fromDate, setFromDate] =
    useState("2026-09-16");

  const [toDate, setToDate] =
    useState("2026-09-16");

  const [refreshing, setRefreshing] =
    useState(false);

  const [refreshSeconds, setRefreshSeconds] =
    useState(300);

  const [fullscreen, setFullscreen] =
    useState(false);

  /* =======================================================
     SELECTED MODULE
  ======================================================= */

  const selectedModule = modules.find(
    (item) =>
      item.id === activeModule
  );

  const selectedSubModule =
    selectedModule?.subModules?.find(
      (item) =>
        item.id === activeSubModule
    );

  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredModules = useMemo(() => {
    if (!search.trim()) {
      return modules;
    }

    const value =
      search.toLowerCase().trim();

    return modules
      .map((module) => {
        const subModules =
          module.subModules
            ?.map((sub) => {
              const items =
                filterItems(
                  sub.items,
                  value
                );

              if (
                sub.title
                  .toLowerCase()
                  .includes(value) ||
                items.length > 0
              ) {
                return {
                  ...sub,
                  items,
                };
              }

              return null;
            })
            .filter(Boolean) as
            | SubModule[]
            | undefined;

        if (
          module.title
            .toLowerCase()
            .includes(value) ||
          (subModules &&
            subModules.length > 0)
        ) {
          return {
            ...module,
            subModules,
          };
        }

        return null;
      })
      .filter(Boolean) as Module[];
  }, [search]);

  /* =======================================================
     TOTAL MENU ITEMS
  ======================================================= */

  const totalItems = useMemo(() => {
    return modules.reduce(
      (total, module) =>
        total +
        (module.subModules?.reduce(
          (subTotal, sub) =>
            subTotal +
            countMenuItems(sub.items),
          0
        ) || 0),
      0
    );
  }, []);

  /* =======================================================
     DASHBOARD CLICK
  ======================================================= */

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setMobileOpen(false);
  };

  /* =======================================================
     MODULE CLICK
  ======================================================= */

  const handleModuleClick = (
    module: Module
  ) => {
    setShowDashboard(false);

    setActiveModule(module.id);

    if (module.subModules?.length) {
      setActiveSubModule(
        module.subModules[0].id
      );
    }

    setMobileOpen(false);
  };

  /* =======================================================
     SUB MODULE CLICK
  ======================================================= */

  const handleSubModuleClick = (
    subModule: SubModule
  ) => {
    setShowDashboard(false);
    setActiveSubModule(
      subModule.id
    );
  };

  /* =======================================================
     ITEM CLICK
  ======================================================= */

  const handleItemClick = (
    item: MenuItem
  ) => {
    console.log(
      "Opening menu:",
      item
    );

    /*
      Future React Router:

      navigate(
        "/dashboard/" + item.id
      );

      Legacy URL:

      if (item.url) {
        ...
      }
    */
  };

  /* =======================================================
     KPI CLICK
  ======================================================= */

  const handleStatClick = (
    stat: DashboardStat
  ) => {
    console.log(
      "Dashboard stat:",
      stat
    );
  };

  /* =======================================================
     REFRESH
  ======================================================= */

  const refreshDashboard = () => {
    setRefreshing(true);
    setRefreshSeconds(300);

    window.setTimeout(() => {
      setRefreshing(false);
    }, 700);
  };

  /* =======================================================
     AUTO REFRESH
  ======================================================= */

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        setRefreshSeconds(
          (seconds) => {
            if (seconds <= 1) {
              refreshDashboard();
              return 300;
            }

            return seconds - 1;
          }
        );
      }, 1000);

    return () =>
      window.clearInterval(
        timer
      );
  }, []);

  /* =======================================================
     FORMAT TIMER
  ======================================================= */

  const formattedRefreshTime =
    `${String(
      Math.floor(
        refreshSeconds / 60
      )
    ).padStart(2, "0")}:${String(
      refreshSeconds % 60
    ).padStart(2, "0")}`;

  /* =======================================================
     FULLSCREEN
  ======================================================= */

  const handleFullscreen = () => {
    setFullscreen(
      (value) => !value
    );
  };

  /* =======================================================
     FLOW NODE
  ======================================================= */

  const renderFlowNode = (
    item: MenuItem,
    number: number,
    isChild = false
  ): React.ReactNode => {
    return (
      <div
        className={`erp-route-node ${
          isChild
            ? "erp-route-child-node"
            : ""
        }`}
      >
        <button
          type="button"
          className="erp-route-card"
          onClick={() =>
            handleItemClick(item)
          }
        >
          <span className="erp-route-number">
            {String(number).padStart(
              2,
              "0"
            )}
          </span>

          <span className="erp-route-card-body">
            <strong>
              {item.title}
            </strong>

            <small>
              {isChild
                ? "Sub Process"
                : selectedSubModule?.title}
            </small>
          </span>

          <span className="erp-route-open">
            <ExternalLink
              size={15}
            />
          </span>
        </button>

        {item.children &&
          item.children.length >
            0 && (
            <div className="erp-route-children">
              <div className="erp-route-child-stem">
                <span />
              </div>

              <div className="erp-route-child-branch">
                {item.children.map(
                  (
                    child,
                    childIndex
                  ) => (
                    <div
                      key={child.id}
                      className="erp-route-child-wrapper"
                    >
                      <div className="erp-route-child-connector">
                        <span />
                        <i />
                      </div>

                      {renderFlowNode(
                        child,
                        number +
                          childIndex +
                          1,
                        true
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
      </div>
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div
      className={`erp-dashboard ${
        fullscreen
          ? "erp-dashboard-fullscreen"
          : ""
      }`}
    >

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`erp-sidebar ${
          mobileOpen
            ? "erp-sidebar-open"
            : ""
        }`}
      >

        {/* BRAND */}

        <div className="erp-brand">

          <div className="erp-brand-mark">
            <span>D</span>
          </div>

          <div className="erp-brand-text">
            <strong>
              DevERP
            </strong>

            <small>
              Enterprise Suite
            </small>
          </div>

          <button
            type="button"
            className="erp-mobile-close"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <X size={20} />
          </button>

        </div>


        <div className="erp-sidebar-label">
          MAIN MENU
        </div>


        <nav className="erp-nav">

          {/* =================================================
              DASHBOARD
          ================================================= */}

          <button
            type="button"
            className={`erp-nav-item ${
              showDashboard
                ? "erp-home-active"
                : ""
            }`}
            onClick={
              handleDashboardClick
            }
          >
            <span className="erp-nav-icon">
              <Home size={18} />
            </span>

            <span>
              Dashboard
            </span>
          </button>


          {/* =================================================
              MODULES
          ================================================= */}

          {filteredModules.map(
            (module) => (
              <button
                type="button"
                key={module.id}
                className={`erp-nav-item ${
                  !showDashboard &&
                  activeModule ===
                    module.id
                    ? "erp-nav-active"
                    : ""
                }`}
                onClick={() =>
                  handleModuleClick(
                    module
                  )
                }
              >

                <span className="erp-nav-icon">
                  {module.icon}
                </span>

                <span>
                  {module.title}
                </span>

                {module.subModules &&
                  module
                    .subModules
                    .length >
                    0 && (
                    <ChevronRight
                      className="erp-nav-arrow"
                      size={15}
                    />
                  )}

              </button>
            )
          )}


          {/* =================================================
              OTHER
          ================================================= */}

          <div className="erp-sidebar-label erp-other-label">
            OTHER
          </div>


          {otherItems.map(
            (item) => (
              <button
                type="button"
                key={item.id}
                className="erp-nav-item"
                onClick={() =>
                  handleItemClick(
                    item
                  )
                }
              >

                <span className="erp-nav-icon">
                  <MoreHorizontal
                    size={18}
                  />
                </span>

                <span>
                  {item.title}
                </span>

              </button>
            )
          )}

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="erp-sidebar-bottom">

          <div className="erp-support-card">

            <div className="erp-support-icon">
              <Headphones
                size={17}
              />
            </div>

            <div>
              <strong>
                Need Help?
              </strong>

              <span>
                Contact support
              </span>
            </div>

          </div>


          <button
            type="button"
            className="erp-logout"
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>

      </aside>


      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {mobileOpen && (
        <div
          className="erp-sidebar-overlay"
          onClick={() =>
            setMobileOpen(false)
          }
        />
      )}


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="erp-main">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="erp-header">

          <div className="erp-header-left">

            <button
              type="button"
              className="erp-mobile-menu"
              onClick={() =>
                setMobileOpen(true)
              }
            >
              <Menu size={21} />
            </button>

            <div className="erp-page-title">

              <span>
                Enterprise Resource Planning
              </span>

              <h1>
                {showDashboard
                  ? "Dashboard"
                  : selectedModule?.title}
              </h1>

            </div>

          </div>


          <div className="erp-header-right">

            {/* SEARCH */}

            <div className="erp-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
              />

              <kbd>
                ⌘ K
              </kbd>

            </div>


            {/* NOTIFICATION */}

            <button
              type="button"
              className="erp-header-icon"
            >
              <Bell size={19} />
              <span className="erp-notification-dot" />
            </button>


            {/* E-TALK */}

            <button
              type="button"
              className="erp-header-icon"
            >
              <MessageCircle
                size={19}
              />
            </button>


            {/* USERS */}

            <div className="erp-live-users">

              <Users size={16} />

              <span>
                9
              </span>

            </div>


            {/* PROFILE */}

            <div className="erp-profile-wrapper">

              <button
                type="button"
                className="erp-profile"
                onClick={() =>
                  setProfileOpen(
                    (value) =>
                      !value
                  )
                }
              >

                <div className="erp-avatar">
                  D
                </div>

                <div className="erp-profile-info">

                  <strong>
                    DEVAPP
                  </strong>

                  <span>
                    Administrator
                  </span>

                </div>

                <ChevronRight
                  size={15}
                  style={{
                    transform:
                      profileOpen
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                  }}
                />

              </button>


              {profileOpen && (
                <div className="erp-profile-menu">

                  <button type="button">
                    <User size={16} />
                    My Profile
                  </button>

                  <button type="button">
                    <Lock size={16} />
                    Change Password
                  </button>

                  <button type="button">
                    <Headphones
                      size={16}
                    />
                    Dev Online Support
                  </button>

                  <div />

                  <button
                    type="button"
                    className="erp-profile-logout"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </header>


        {/* ===================================================
            CONTENT
        =================================================== */}

        <section className="erp-content">

          {/* =================================================
              BREADCRUMB
          ================================================= */}

          <div className="erp-breadcrumb">

            <span>
              Dashboard
            </span>

            <ChevronRight
              size={14}
            />

            {showDashboard ? (
              <strong>
                Overview
              </strong>
            ) : (
              <>
                <span>
                  {selectedModule?.title}
                </span>

                <ChevronRight
                  size={14}
                />

                <strong>
                  {selectedSubModule?.title}
                </strong>
              </>
            )}

          </div>


          {/* =================================================
              DASHBOARD VIEW ONLY
          ================================================= */}

          {showDashboard && (
            <>

              {/* =================================================
                  DASHBOARD HERO
              ================================================= */}

              <section className="erp-dashboard-hero">

                <div className="erp-dashboard-hero-content">

                  <div className="erp-eyebrow">
                    HOSPITAL MANAGEMENT
                  </div>

                  <h2>
                    Good afternoon,
                    <strong>
                      {" "}DEVAPP
                    </strong>
                  </h2>

                  <p>
                    Monitor hospital operations,
                    patient activity and today's
                    reports from one centralized
                    dashboard.
                  </p>

                </div>


                <div className="erp-dashboard-hero-actions">

                  <div className="erp-refresh-status">

                    <span
                      className={
                        refreshing
                          ? "erp-refreshing"
                          : ""
                      }
                    >
                      <RefreshCw
                        size={14}
                      />
                    </span>

                    <div>

                      <strong>
                        Auto refresh
                      </strong>

                      <small>
                        {formattedRefreshTime}
                      </small>

                    </div>

                  </div>


                  <button
                    type="button"
                    className="erp-refresh-button"
                    onClick={
                      refreshDashboard
                    }
                  >

                    <RefreshCw
                      size={16}
                      className={
                        refreshing
                          ? "erp-spin"
                          : ""
                      }
                    />

                    Refresh

                  </button>

                </div>

              </section>


              {/* =================================================
                  FILTER BAR
              ================================================= */}

              <section className="erp-dashboard-filter">

                <div className="erp-filter-title">

                  <div className="erp-filter-icon">
                    <Filter size={17} />
                  </div>

                  <div>

                    <strong>
                      Dashboard Filters
                    </strong>

                    <span>
                      Select branch, dashboard and
                      reporting period
                    </span>

                  </div>

                </div>


                <div className="erp-filter-fields">

                  {/* BRANCH */}

                  <label className="erp-filter-field">

                    <span>
                      Branch
                    </span>

                    <select
                      value={branch}
                      onChange={(event) =>
                        setBranch(
                          event.target.value
                        )
                      }
                    >

                      <option value="">
                        - Select Branch -
                      </option>

                      <option value="ALL">
                        All Branches
                      </option>

                      <option value="JUNAGADH">
                        JUNAGADH
                      </option>

                      <option value="KESHOD">
                        KESHOD
                      </option>

                      <option value="VERAVAL">
                        VERAVAL
                      </option>

                    </select>

                  </label>


                  {/* TYPE */}

                  <label className="erp-filter-field">

                    <span>
                      Dashboard Type
                    </span>

                    <select
                      value={
                        dashboardType
                      }
                      onChange={(event) =>
                        setDashboardType(
                          event.target.value
                        )
                      }
                    >

                      <option value="HOSPITAL">
                        HOSPITAL
                      </option>

                      <option value="MEDICAL">
                        MEDICAL
                      </option>

                      <option value="ALL">
                        All Dashboard
                      </option>

                    </select>

                  </label>


                  {/* FROM */}

                  <label className="erp-filter-field">

                    <span>
                      From Date
                    </span>

                    <input
                      type="date"
                      value={fromDate}
                      onChange={(event) =>
                        setFromDate(
                          event.target.value
                        )
                      }
                    />

                  </label>


                  {/* TO */}

                  <label className="erp-filter-field">

                    <span>
                      To Date
                    </span>

                    <input
                      type="date"
                      value={toDate}
                      onChange={(event) =>
                        setToDate(
                          event.target.value
                        )
                      }
                    />

                  </label>


                  {/* APPLY */}

                  <button
                    type="button"
                    className="erp-filter-apply"
                    onClick={
                      refreshDashboard
                    }
                  >

                    <BarChart3
                      size={17}
                    />

                    Apply

                  </button>

                </div>

              </section>


              {/* =================================================
                  KPI HEADER
              ================================================= */}

              <div className="erp-section-heading erp-dashboard-heading">

                <div>

                  <span>
                    TODAY'S OVERVIEW
                  </span>

                  <h3>
                    Hospital Activity
                  </h3>

                </div>


                <div className="erp-dashboard-date">
                  {branch} •{" "}
                  {dashboardType}
                </div>

              </div>


              {/* =================================================
                  KPI GRID
              ================================================= */}

              <div className="erp-dashboard-stat-grid">

                {dashboardStats.map(
                  (stat) => (

                    <button
                      type="button"
                      key={stat.id}
                      className={`erp-dashboard-stat-card erp-stat-${stat.tone}`}
                      onClick={() =>
                        handleStatClick(
                          stat
                        )
                      }
                    >

                      <div className="erp-stat-top">

                        <div className="erp-stat-icon-box">
                          {stat.icon}
                        </div>

                        <span className="erp-stat-menu">
                          <MoreHorizontal
                            size={17}
                          />
                        </span>

                      </div>


                      <div className="erp-stat-value">
                        {stat.value}
                      </div>


                      <div className="erp-stat-title">
                        {stat.title}
                      </div>


                      <div className="erp-stat-footer">

                        <span>
                          {stat.footer}
                        </span>

                        <ArrowRight
                          size={14}
                        />

                      </div>

                    </button>

                  )
                )}

              </div>

            </>
          )}


          {/* =================================================
              MODULE VIEW ONLY
          ================================================= */}

          {!showDashboard && (
            <>

              {/* =================================================
                  SELECTED MODULE INTRO
              ================================================= */}

              <div className="erp-intro">

                <div>

                  <div className="erp-eyebrow">
                    {selectedModule?.title}
                  </div>

                  <h2>
                    {selectedModule?.title}{" "}
                    Management
                  </h2>

                  <p>
                    Manage your{" "}
                    {selectedModule?.title.toLowerCase()}{" "}
                    operations from one centralized
                    workspace.
                  </p>

                </div>


                <button
                  type="button"
                  className="erp-fullscreen-btn"
                  onClick={
                    handleFullscreen
                  }
                >

                  <Maximize2
                    size={17}
                  />

                  {fullscreen
                    ? "Exit Fullscreen"
                    : "Fullscreen"}

                </button>

              </div>


              {/* =================================================
                  MODULE CARDS
              ================================================= */}

              <div className="erp-module-grid">

                {selectedModule?.subModules?.map(
                  (
                    subModule,
                    index
                  ) => (

                    <button
                      type="button"
                      key={
                        subModule.id
                      }
                      className={`erp-module-card ${
                        activeSubModule ===
                        subModule.id
                          ? "erp-module-card-active"
                          : ""
                      }`}
                      onClick={() =>
                        handleSubModuleClick(
                          subModule
                        )
                      }
                    >

                      <div className="erp-module-card-top">

                        <span className="erp-card-number">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="erp-card-arrow">
                          <ArrowRight
                            size={17}
                          />
                        </span>

                      </div>


                      <div className="erp-module-card-icon">
                        {
                          selectedModule.icon
                        }
                      </div>


                      <h3>
                        {subModule.title}
                      </h3>


                      <p>
                        {countMenuItems(
                          subModule.items
                        )}{" "}
                        menu items
                      </p>

                    </button>

                  )
                )}

              </div>


              {/* =================================================
                  MODULE FLOW
              ================================================= */}

              {selectedSubModule && (
                <section className="erp-flow-section">

                  <div className="erp-section-heading">

                    <div>

                      <span>
                        MODULE FLOW
                      </span>

                      <h3>
                        Complete business process
                        at a glance
                      </h3>

                    </div>


                    <div className="erp-item-count">
                      {countMenuItems(
                        selectedSubModule.items
                      )}{" "}
                      Items
                    </div>

                  </div>


        <div className="erp-route-flow">

  {Array.from(
    {
      length: Math.ceil(
        selectedSubModule.items.length / 3
      ),
    },
    (_, rowIndex) => {
      const start = rowIndex * 3;

      const rowItems =
        selectedSubModule.items.slice(
          start,
          start + 3
        );

      const isReverse = rowIndex % 2 === 1;

      const displayItems = isReverse
        ? [...rowItems].reverse()
        : rowItems;

      const hasNextRow =
        rowIndex <
        Math.ceil(
          selectedSubModule.items.length / 3
        ) - 1;

      return (
        <div
          className={`erp-route-step-row ${
            isReverse
              ? "erp-route-step-row-reverse"
              : ""
          }`}
          key={`step-row-${rowIndex}`}
        >

          {/* ============================================
              CARDS
          ============================================ */}

          {displayItems.map(
            (item, itemIndex) => {
              const actualIndex =
                start +
                rowItems.indexOf(item);

              const isLastInRow =
                itemIndex ===
                displayItems.length - 1;

              return (
                <React.Fragment
                  key={item.id}
                >

                  <div className="erp-route-step-card">
                    {renderFlowNode(
                      item,
                      actualIndex + 1
                    )}
                  </div>


                  {/* ====================================
                      CARD → CARD CONNECTOR
                  ==================================== */}

                  {!isLastInRow && (
                    <div
                      className="erp-route-step-connector"
                      aria-hidden="true"
                    >
                      <div className="erp-route-step-line" />

                      <div className="erp-route-step-arrow">
                        <ArrowRight
                          size={17}
                          strokeWidth={2.3}
                        />
                      </div>
                    </div>
                  )}

                </React.Fragment>
              );
            }
          )}


          {/* ============================================
              NEXT ROW CONNECTOR
          ============================================ */}

          {hasNextRow && (
            <div
              className={`erp-route-row-connector ${
                isReverse
                  ? "erp-route-row-connector-left"
                  : "erp-route-row-connector-right"
              }`}
              aria-hidden="true"
            >

              <div className="erp-route-row-line-vertical" />

              <div className="erp-route-row-arrow">
                <ArrowDown
                  size={17}
                  strokeWidth={2.3}
                />
              </div>

            </div>
          )}

        </div>
      );
    }
  )}

</div>
                </section>
              )}


              {/* =================================================
                  QUICK STATS
              ================================================= */}

              <div className="erp-stats">

                <div className="erp-stat-card">

                  <div className="erp-stat-icon">
                    <Boxes size={19} />
                  </div>

                  <div>

                    <span>
                      Total Modules
                    </span>

                    <strong>
                      {modules.length}
                    </strong>

                  </div>

                </div>


                <div className="erp-stat-card">

                  <div className="erp-stat-icon">
                    <Receipt
                      size={19}
                    />
                  </div>

                  <div>

                    <span>
                      Total Menu Items
                    </span>

                    <strong>
                      {totalItems}
                    </strong>

                  </div>

                </div>


                <div className="erp-stat-card">

                  <div className="erp-stat-icon">
                    <Users size={19} />
                  </div>

                  <div>

                    <span>
                      Live Users
                    </span>

                    <strong>
                      9
                    </strong>

                  </div>

                </div>


                <div className="erp-stat-card">

                  <div className="erp-stat-icon">
                    <MessageCircle
                      size={19}
                    />
                  </div>

                  <div>

                    <span>
                      E-Talk
                    </span>

                    <strong>
                      Active
                    </strong>

                  </div>

                </div>

              </div>

            </>
          )}

        </section>

      </main>

    </div>
  );
};

export default Dashboard;