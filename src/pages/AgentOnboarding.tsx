
import { useState } from 'react';
import { Navbar } from '@/components/dashboard/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Upload, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { businessFunctions, businessUnits } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';

const AgentOnboarding = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    businessFunction: '',
    businessUnit: '',
    version: '1.0.0',
    dockerImage: '',
    owner: '',
    testCases: '',
    approvers: ['admin@agentplane.com'],
    reviewNotes: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agent submission successful",
      description: "Your agent has been submitted for review. You'll be notified when it's approved.",
    });
    // Reset form or navigate to confirmation page
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return formValues.name && formValues.description && formValues.businessFunction && formValues.businessUnit;
      case 2:
        return formValues.dockerImage && formValues.version;
      case 3:
        return formValues.testCases && formValues.owner;
      default:
        return false;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        <div>
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">New Agent Onboarding</h1>
          <p className="text-muted-foreground">Submit a new AI agent for review and deployment</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`flex flex-col items-center ${step < currentStep ? 'text-primary' : step === currentStep ? 'text-black' : 'text-muted-foreground'}`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step < currentStep ? 'bg-primary text-white' : 
                    step === currentStep ? 'border-2 border-primary bg-background' : 
                    'border-2 border-muted-foreground bg-background'
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                <span className="text-sm">
                  {step === 1 ? 'Basic Info' : 
                   step === 2 ? 'Technical Details' : 
                   step === 3 ? 'Testing' : 'Review'}
                </span>
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 ? 'Agent Basic Information' : 
                 currentStep === 2 ? 'Technical Details & Deployment' :
                 currentStep === 3 ? 'Testing & Documentation' : 'Review & Submit'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Agent Name</Label>
                      <Input 
                        id="name" 
                        value={formValues.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter agent name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        value={formValues.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe what this agent does"
                        rows={3}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessFunction">Business Function</Label>
                        <Select 
                          value={formValues.businessFunction} 
                          onValueChange={(value) => handleInputChange('businessFunction', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select function" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessFunctions.map((func) => (
                              <SelectItem key={func.id} value={func.id}>
                                {func.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="businessUnit">Business Unit</Label>
                        <Select 
                          value={formValues.businessUnit} 
                          onValueChange={(value) => handleInputChange('businessUnit', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select business unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessUnits.map((unit) => (
                              <SelectItem key={unit.id} value={unit.id}>
                                {unit.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="owner">Owner/Point of Contact</Label>
                      <Input 
                        id="owner" 
                        value={formValues.owner}
                        onChange={(e) => handleInputChange('owner', e.target.value)}
                        placeholder="Name or email of agent owner"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="version">Version</Label>
                        <Input 
                          id="version" 
                          value={formValues.version}
                          onChange={(e) => handleInputChange('version', e.target.value)}
                          placeholder="e.g., 1.0.0"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="type">Agent Type</Label>
                        <Select 
                          value="chatbot" 
                          onValueChange={() => {}}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select agent type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chatbot">Chatbot</SelectItem>
                            <SelectItem value="classifier">Classifier</SelectItem>
                            <SelectItem value="summarizer">Summarizer</SelectItem>
                            <SelectItem value="translator">Translator</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="dockerImage">Docker Image URI</Label>
                      <Input 
                        id="dockerImage" 
                        value={formValues.dockerImage}
                        onChange={(e) => handleInputChange('dockerImage', e.target.value)}
                        placeholder="e.g., registry.example.com/myagent:1.0.0"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label>Environment Variables</Label>
                      <div className="border rounded-md p-4 bg-muted/20">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <Input placeholder="Variable Name" />
                          <Input placeholder="Value" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <Input placeholder="Variable Name" />
                          <Input placeholder="Value" />
                        </div>
                        <Button type="button" variant="outline" size="sm">Add Environment Variable</Button>
                      </div>
                    </div>

                    <div className="bg-muted/20 p-4 rounded-md border">
                      <p className="text-sm text-muted-foreground mb-2">Upload Additional Resources</p>
                      <div className="flex items-center justify-center w-full">
                        <label 
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-background hover:bg-muted/50"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Documentation, configuration files, etc.
                            </p>
                          </div>
                          <input type="file" className="hidden" multiple />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="testCases">Test Cases</Label>
                      <Textarea 
                        id="testCases" 
                        value={formValues.testCases}
                        onChange={(e) => handleInputChange('testCases', e.target.value)}
                        placeholder="Describe test cases for this agent"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label>API Documentation</Label>
                      <div className="bg-muted/20 p-4 rounded-md border mb-4">
                        <div className="flex flex-col items-center justify-center w-full">
                          <label 
                            className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer bg-background hover:bg-muted/50"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-6 h-6 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground">
                                Upload API documentation (Swagger/OpenAPI)
                              </p>
                            </div>
                            <input type="file" className="hidden" />
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Integrations</Label>
                      <div className="space-y-2">
                        {['Slack', 'Microsoft Teams', 'Email', 'REST API'].map((integration) => (
                          <div key={integration} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`integration-${integration}`}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <label 
                              htmlFor={`integration-${integration}`}
                              className="ml-2 text-sm font-medium"
                            >
                              {integration}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Review Submission</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-muted-foreground text-sm">Agent Name</Label>
                          <p className="font-medium">{formValues.name || '[Not provided]'}</p>
                        </div>
                        
                        <div>
                          <Label className="text-muted-foreground text-sm">Version</Label>
                          <p className="font-medium">{formValues.version || '[Not provided]'}</p>
                        </div>
                        
                        <div>
                          <Label className="text-muted-foreground text-sm">Business Function</Label>
                          <p className="font-medium">
                            {businessFunctions.find(f => f.id === formValues.businessFunction)?.name || '[Not provided]'}
                          </p>
                        </div>
                        
                        <div>
                          <Label className="text-muted-foreground text-sm">Business Unit</Label>
                          <p className="font-medium">
                            {businessUnits.find(u => u.id === formValues.businessUnit)?.name || '[Not provided]'}
                          </p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <Label className="text-muted-foreground text-sm">Description</Label>
                          <p>{formValues.description || '[Not provided]'}</p>
                        </div>
                        
                        <div>
                          <Label className="text-muted-foreground text-sm">Docker Image</Label>
                          <p className="font-medium">{formValues.dockerImage || '[Not provided]'}</p>
                        </div>
                        
                        <div>
                          <Label className="text-muted-foreground text-sm">Owner</Label>
                          <p className="font-medium">{formValues.owner || '[Not provided]'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="approvers" className="mb-1 block">Reviewers</Label>
                        <Tabs defaultValue="internal">
                          <TabsList className="mb-2">
                            <TabsTrigger value="internal">Internal</TabsTrigger>
                            <TabsTrigger value="external">External</TabsTrigger>
                          </TabsList>
                          <TabsContent value="internal" className="space-y-2">
                            {formValues.approvers.map((approver, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-muted/20 rounded">
                                <span>{approver}</span>
                                <span className="text-xs text-muted-foreground">Platform Admin</span>
                              </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" className="w-full">
                              Add Internal Reviewer
                            </Button>
                          </TabsContent>
                          <TabsContent value="external" className="space-y-2">
                            <Button type="button" variant="outline" size="sm" className="w-full">
                              Add External Reviewer
                            </Button>
                          </TabsContent>
                        </Tabs>
                      </div>
                      
                      <div>
                        <Label htmlFor="reviewNotes">Additional Notes for Reviewers</Label>
                        <Textarea 
                          id="reviewNotes" 
                          value={formValues.reviewNotes}
                          onChange={(e) => handleInputChange('reviewNotes', e.target.value)}
                          placeholder="Any additional information for the reviewers"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                type="button"
                variant="outline"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button 
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStepComplete(currentStep)}
                >
                  Next
                </Button>
              ) : (
                <Button 
                  type="button" 
                  onClick={handleSubmit}
                >
                  Submit for Review
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AgentOnboarding;
