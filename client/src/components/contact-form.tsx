import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const campaignRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  fundingGoal: z.number().min(1000, "Funding goal must be at least ₹1,000"),
});

type CampaignRequestForm = z.infer<typeof campaignRequestSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CampaignRequestForm>({
    resolver: zodResolver(campaignRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      description: "",
      fundingGoal: 0,
    },
  });

  const onSubmit = async (data: CampaignRequestForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate email sending (in real app, this would send an email)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link for campaign request
      const subject = `Campaign Request: ${data.category}`;
      const body = `
Name: ${data.name}
Email: ${data.email}
Category: ${data.category}
Funding Goal: ₹${data.fundingGoal.toLocaleString()}

Description:
${data.description}
      `;
      
      const mailtoLink = `mailto:contact@hopefoundation.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      
      toast({
        title: "Campaign Request Submitted!",
        description: "We'll review your campaign and get back to you within 48 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at contact@hopefoundation.org",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Start Your Own Campaign</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have a cause you're passionate about? Submit your campaign idea and we'll help you 
              make a difference in your community.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="food">Food & Hunger Relief</SelectItem>
                          <SelectItem value="women">Women Empowerment</SelectItem>
                          <SelectItem value="cancer">Cancer Treatment Support</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Tell us about your campaign idea, target beneficiaries, and expected impact..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fundingGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Funding Goal (₹)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="50000"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-hope-blue text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2" />
                      Submit Campaign Request
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="People planning community initiatives" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="text-hope-blue mr-3" />
                  <span className="text-gray-600">contact@hopefoundation.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-hope-blue mr-3" />
                  <span className="text-gray-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-hope-blue mr-3" />
                  <span className="text-gray-600">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
