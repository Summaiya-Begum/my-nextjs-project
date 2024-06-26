// app/services/[slug]/page.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); 
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        id: 13,
        user_id: 1,
        name: "Consultation Two",
        icon: "bi bi-book-half",
        currency: "INR",
        int_price: null,
        price: 599,
        capacity: "100",
        start_date: "2023-08-01",
        end_date: "2023-12-30",
        short_desc: "Detailed Consultation",
        desc: "A comprehensive course on numerology to deepen your understanding of numbers and their influence on life.",
        location: "Online",
        created_at: "2024-06-20T08:46:02.510959Z",
        updated_at: "2024-06-20T08:46:02.510981Z",
        duration: "90",
        is_online: true,
        is_active: true,
        slug: "consultation-two",
        service_type: "online",
      };
      setService(data);
    };
    fetchData();
  }, [slug]);

  if (!service) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center mb-4">
          <i className={service?.icon}></i>
          <h1 className="text-2xl font-bold ml-2">{service?.name}</h1>
        </div>
        <p className="text-gray-600">{service?.short_desc}</p>
        <p className="text-gray-600">{service?.desc}</p>
        <p className="text-gray-600">
          <strong>Price:</strong> {service?.currency} {service?.price}
        </p>
        <p className="text-gray-600">
          <strong>Duration:</strong> {service?.duration} minutes
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> {service?.location}
        </p>
        <p className="text-gray-600">
          <strong>Start Date:</strong> {service?.start_date}
        </p>
        <p className="text-gray-600">
          <strong>End Date:</strong> {service?.end_date}
        </p>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
