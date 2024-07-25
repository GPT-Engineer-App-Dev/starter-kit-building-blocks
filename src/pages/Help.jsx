import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import { Mail } from "lucide-react";

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      
      <Card title="Frequently Asked Questions">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I create an account?</AccordionTrigger>
            <AccordionContent>
              To create an account, click on the "Sign Up" button in the top right corner of the page. Fill out the required information and follow the prompts to complete your registration.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I reset my password?</AccordionTrigger>
            <AccordionContent>
              If you've forgotten your password, click on the "Forgot Password" link on the login page. Enter your email address, and we'll send you instructions to reset your password.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept various payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. You can view all available options in your account settings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Card title="Getting Started Guide" className="mt-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>Create an account or log in to your existing account</li>
          <li>Complete your profile information</li>
          <li>Explore the dashboard to familiarize yourself with the features</li>
          <li>Check out our tutorials and documentation for detailed instructions</li>
          <li>If you need help, don't hesitate to contact our support team</li>
        </ol>
      </Card>

      <Card title="Contact Support" className="mt-6">
        <p className="mb-4">If you can't find the answer you're looking for, our support team is here to help.</p>
        <Button className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Contact Support
        </Button>
      </Card>

      <Card title="Useful Resources" className="mt-6">
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">User Manual</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Video Tutorials</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">API Documentation</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Community Forums</a></li>
        </ul>
      </Card>
    </div>
  );
};

export default Help;
