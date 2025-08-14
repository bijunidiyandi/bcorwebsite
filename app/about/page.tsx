import React from 'react'
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We are dedicated to providing innovative enterprise solutions that empower businesses 
            to achieve their full potential. Our comprehensive suite of modules and solutions 
            is designed to streamline operations, enhance productivity, and drive growth across 
            various industries.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            To be the leading provider of integrated business solutions, helping organizations 
            transform their operations through cutting-edge technology and exceptional service.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-gray-700">
                Continuously pushing boundaries to deliver state-of-the-art solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Excellence</h3>
              <p className="text-gray-700">
                Maintaining the highest standards in everything we do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p className="text-gray-700">
                Building trust through honest and ethical business practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Customer Focus</h3>
              <p className="text-gray-700">
                Putting our clients' success at the heart of our operations.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}