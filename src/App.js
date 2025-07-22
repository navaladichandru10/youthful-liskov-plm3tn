// Zoho Pay - Glassmorphism UI Layout (React + TailwindCSS)
// This is a layout reference for use in Figma or code export if needed

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell } from "recharts";
import { Send, QrCode, ArrowDown, User } from "lucide-react";

const COLORS = ["#00FFFF", "#FF00FF", "#00FF94"];

export default function ZohoPayUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-white">
      {/* Wallet Card */}
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 shadow-xl mb-6">
        <div className="text-xl font-semibold">Hello, Chandru</div>
        <div className="text-4xl font-bold mt-2">₹45,000.00</div>
        <div className="text-sm text-white/70">Linked to HDFC Bank</div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <GlassButton icon={<Send />} label="Send" />
        <GlassButton icon={<ArrowDown />} label="Receive" />
        <GlassButton icon={<QrCode />} label="Scan" />
      </div>

      {/* Transactions */}
      <div className="space-y-3">
        {[
          { name: "Amazon", amount: "-₹999.00" },
          { name: "Zomato", amount: "-₹450.00" },
          { name: "Swiggy", amount: "-₹120.00" },
        ].map((t, i) => (
          <Card
            key={i}
            className="bg-white/10 backdrop-blur-md text-white border-none"
          >
            <CardContent className="flex justify-between py-4">
              <span>{t.name}</span>
              <span className="text-red-400">{t.amount}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics */}
      <div className="mt-10">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-4 shadow-xl mb-4">
          <div className="text-lg font-semibold mb-2">
            This Month's Spending
          </div>
          <PieChart width={300} height={200}>
            <Pie
              dataKey="value"
              data={[{ value: 6000 }, { value: 9000 }, { value: 10000 }]}
              cx={150}
              cy={100}
              outerRadius={60}
              fill="#8884d8"
              label
            >
              {COLORS.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}

function GlassButton({ icon, label }) {
  return (
    <Button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-4 py-2 w-full flex flex-col items-center gap-1">
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}
