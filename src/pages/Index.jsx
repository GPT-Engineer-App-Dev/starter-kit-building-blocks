import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <p className="text-lg mb-4">This is a bare-bones application that you can modify and build upon.</p>
      <Button className="mb-8">Get Started</Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Feature 1">
          <p>Description of feature 1. You can add more details here.</p>
        </Card>
        <Card title="Feature 2">
          <p>Description of feature 2. You can add more details here.</p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
