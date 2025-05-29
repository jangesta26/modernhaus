'use client'
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItems {
  label: string;
  pathname?: string;
}

interface BreadcrumbProps {
  breadcrumbItems: BreadcrumbItems[];
}

const BreacrumbComponent: React.FC<BreadcrumbProps> = ({ breadcrumbItems }) => {
  return (
    <div className="bg-gray-50 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.pathname ? (
                      <BreadcrumbLink href={item.pathname}>{item.label}</BreadcrumbLink>
                    ) : (
                      <span className="text-indigo-600 font-medium">{item.label}</span>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}
export default BreacrumbComponent;