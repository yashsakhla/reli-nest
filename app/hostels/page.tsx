import type { Metadata } from "next";
import HostelsPageClient from "./HostelsPageClient";

export const metadata: Metadata = {
  title: "Hostels | Reli Nest",
  description: "Explore premium student hostels across India with Reli Nest.",
};

export default function HostelsPage() {
  return <HostelsPageClient />;
}
