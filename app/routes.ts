import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/checkout.tsx"),
  route("success", "routes/success.tsx"),
  route("cancel", "routes/cancel.tsx"),
] satisfies RouteConfig;
