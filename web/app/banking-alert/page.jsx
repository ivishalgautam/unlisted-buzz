import { Shield, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

export default function BankingAlertPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">
              IMPORTANT NOTICE
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Official Bank Accounts of Unlisted Buzz
            </h1>
            <p className="text-slate-600 text-lg">
              Secure Your Investments with Verified Details
            </p>
          </div>

          <Alert className="mb-8 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">
              Banking Details Notice
            </AlertTitle>
            <AlertDescription className="text-amber-700">
              To maintain the integrity and safety of all investor transactions,
              we kindly advise our valued users to refer only to our verified
              banking details shared through official communication channels.
            </AlertDescription>
          </Alert>

          <Card className="mb-8 border-green-100 shadow-md">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <div className="flex items-center justify-center">
                <div className="space-y-1 w-full">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-green-800">
                      Verified Banking Details
                    </CardTitle>
                  </div>
                  <CardDescription className="text-green-700">
                    Please use only these official banking details for all
                    transactions
                  </CardDescription>
                </div>
                <figure className="grow-0 w-44">
                  <Image
                    width={100}
                    height={100}
                    alt="axis bank"
                    src={"/icici-bank.png"}
                    className="w-full h-full object-contain object-center"
                  />
                </figure>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-slate-500">Account Name</div>
                  <div className="font-bold text-slate-900 md:col-span-2">
                    AQIFY BESOL PRIVATE LIMITED
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-slate-500">
                    Account Number
                  </div>
                  <div className="font-bold text-slate-900 md:col-span-2">
                    113405003498
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-slate-500">IFSC Code</div>
                  <div className="font-bold text-slate-900 md:col-span-2">
                    ICIC0001134
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-slate-500">
                    Mobile Number
                  </div>
                  <div className="font-bold text-slate-900 md:col-span-2">
                    +919220902567
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-medium text-slate-500">Email</div>
                  <div className="font-bold text-slate-900 md:col-span-2">
                    aqifybesol@gmail.com
                  </div>
                </div>
              </div>
            </CardContent>
            {/* <CardFooter className="bg-slate-50 flex justify-between">
              <div className="text-sm text-slate-500">
                Last updated: May 3, 2025
              </div>
              <Button variant="ghost" size="sm" className="text-slate-500">
                <ExternalLink className="h-4 w-4 mr-2" />
                Verify Details
              </Button>
            </CardFooter> */}
          </Card>

          <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-4 text-slate-900">
              Your Investment Security is Our Top Priority
            </h2>
            <p className="text-slate-600 mb-6">
              At Unlisted Buzz, we go beyond just connecting you with exclusive
              unlisted shares — we ensure that every transaction is safeguarded
              with top-tier security and full transparency. Your trust is our
              most valued asset, and protecting your investments is our
              unwavering commitment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-slate-700">
                  100% Transaction Security
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-slate-700">
                  Verified Payment Channels Only
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-slate-700">
                  Transparent Investment Process
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-600 italic">
              Stay safe. Stay invested. Stay informed — with Unlisted Buzz, your
              trusted partner in unlisted equity investments.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
