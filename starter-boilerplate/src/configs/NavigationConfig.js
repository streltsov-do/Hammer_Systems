import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const mainNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    // title: "Сatalog",
    title: "Основные",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        // title: "Dashboard",
        title: "Дашбоард",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "planner",
        path: `${APP_PREFIX_PATH}/main/planner`,
        // title: "Planner",
        title: "Планировщик",
        icon: HeatMapOutlined,
        breadcrumb: false,
        submenu: [],
      },
      
      {
        key: "catalog",
        path: `${APP_PREFIX_PATH}/main/catalog`,
        // title: "Сatalog",
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "catalog-products",
            path: `${APP_PREFIX_PATH}/main/catalog/products`,
            // title: "Products",
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-categories",
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            // title: "Categories",
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-collections",
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            // title: "Collections",
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-combo",
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            // title: "Combo",
            title: "Комбо",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },

      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/main/orders`,
        // title: "Orders",
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        // title: "Orders",
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            // title: "Clients list",
            title: "Список клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "clients-groups",
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            // title: "Clients groups",
            title: "Группы клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },

      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/main/banners`,
        // title: "Banners",
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "promo",
        path: `${APP_PREFIX_PATH}/main/promo`,
        // title: "Promo",
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "offline",
        path: `${APP_PREFIX_PATH}/main/offline`,
        // title: "offline",
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "offline-addresses",
            path: `${APP_PREFIX_PATH}/main/offline/addresses`,
            // title: "Addresses",
            title: "Адреса",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "offline-geofences",
            path: `${APP_PREFIX_PATH}/main/offline/geofences`,
            // title: "Geofences",
            title: "Геозоны",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },

      {
        key: "employees",
        path: `${APP_PREFIX_PATH}/main/employees`,
        // title: "Employees",
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "mailings",
        path: `${APP_PREFIX_PATH}/main/mailings`,
        // title: "Mailings",
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/system`,
    // title: "System",
    title: "Системные",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/system/settings`,
        // title: "Settings",
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mobile",
        path: `${APP_PREFIX_PATH}/system/mobile`,
        // title: "Mobile app",
        title: "Мобильное приложение",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "logs",
        path: `${APP_PREFIX_PATH}/system/logs`,
        // title: "Logs",
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;
