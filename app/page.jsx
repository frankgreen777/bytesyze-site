import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Recycle,
  HardDrive,
  Truck,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Secure IT Asset Disposition",
      desc:
        "Certified data destruction and compliant end-of-life IT asset processing.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Data Security & Compliance",
      desc:
        "NIST, HIPAA, and GDPR-aligned handling with full audit trails.",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Responsible Recycling",
      desc:
        "Zero-landfill recycling with downstream vendor transparency.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Nationwide Logistics",
      desc:
        "Secure on-site pickup, serialized tracking, and chain of custody.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Asset Reporting & Value Recovery",
      desc:
        "Detailed reporting, resale opportunities, and ESG impact metrics.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Secure. Sustainable. Smart.
            <span className="block text-green-400 mt-2">
              IT Asset Disposition Done Right.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Enterprise-grade ITAD services that protect your data,
            maximize asset value, and support environmental responsibility.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-green-500 hover:bg-green-600 text-black">
              Request a Quote
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white"
            >
              Talk to an Expert
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl p-10 shadow-lg"
        >
          <p className="text-xl font-semibold">
            Trusted ITAD Partner
          </p>
          <p className="mt-4 text-gray-300">
            Serving healthcare, education, enterprise, and government
            organizations across the United States.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our ITAD Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-green-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BYTESYZE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          Why ByteSyze IT Solutions?
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
          <li>
            ✔ Documented chain of custody from pickup to final disposition
          </li>
          <li>
            ✔ Data destruction certificates for every serialized asset
          </li>
          <li>
            ✔ ESG-friendly zero-landfill recycling practices
          </li>
          <li>
            ✔ Designed for compliance-driven industries
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-green-500 text-black py-16 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Retire Your IT Assets Securely?
        </h2>

        <p className="mt-4 max-w-xl mx-auto">
          Get a customized ITAD plan that aligns with your security,
          compliance, and sustainability goals.
        </p>

        <Button className="mt-6 bg-black text-white hover:bg-zinc-800">
          Get Started
        </Button>
      </section>
    </main>
  );
}
export default HomePage;
