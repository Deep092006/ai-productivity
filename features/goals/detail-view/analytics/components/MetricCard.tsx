"use client";

import React from "react";
import CountUp from "react-countup";
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number | string;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  suffix?: string;
  animateValue?: boolean;
  color?: string;
  subtitle?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon, 
  suffix = '', 
  animateValue = false,
  color = 'from-blue-500 to-blue-600',
  subtitle
}) => (
  <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200/80 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <h3 className="text-2xl font-bold text-gray-900">
            {animateValue && typeof value === 'number' ? (
              <CountUp end={value} duration={1.5} suffix={suffix} />
            ) : (
              `${value}${suffix}`
            )}
          </h3>
          {change !== undefined && (
            <div className={`flex items-center text-sm font-medium ${
              changeType === 'positive' ? 'text-emerald-600' : 
              changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
            }`}>
              {changeType === 'positive' ? <ArrowUp className="w-3 h-3 mr-1" /> :
               changeType === 'negative' ? <ArrowDown className="w-3 h-3 mr-1" /> :
               <Minus className="w-3 h-3 mr-1" />}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white`}>
        {icon}
      </div>
    </div>
  </Card>
);

export default MetricCard;
