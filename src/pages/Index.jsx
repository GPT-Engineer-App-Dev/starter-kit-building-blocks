import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <p className="text-lg mb-4">This is a bare-bones application that you can modify and build upon.</p>
      <Button className="mb-8 bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Feature 1: Smart Task Management">
          <p>Our intelligent task management system revolutionizes your workflow:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>AI-powered task prioritization</li>
            <li>Customizable project views (Kanban, List, Calendar)</li>
            <li>Real-time collaboration with team members</li>
            <li>Automated reminders and deadline tracking</li>
            <li>Integration with popular productivity tools</li>
          </ul>
          <Button className="mt-4">Learn More</Button>
        </Card>
        <Card title="Feature 2">
          <p>Description of feature 2. You can add more details here.</p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
