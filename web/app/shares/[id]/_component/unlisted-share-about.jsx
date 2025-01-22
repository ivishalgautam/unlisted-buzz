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
        <div
          dangerouslySetInnerHTML={{ __html: about }}
          className="prose !min-w-full"
        ></div>
      </CardContent>
    </Card>
  );
}
