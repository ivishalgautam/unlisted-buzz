import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ShareAbout({ companyName, about }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About {companyName}</CardTitle>
        <CardDescription>Company overview and key information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div dangerouslySetInnerHTML={{ __html: about }}></div>
        </div>
      </CardContent>
    </Card>
  );
}
