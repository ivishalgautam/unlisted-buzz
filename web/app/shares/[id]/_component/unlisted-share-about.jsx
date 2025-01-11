import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ShareAbout({
  companyName,
  description,
  founded,
  headquarters,
  employees,
  industry,
  keyProducts,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About {companyName}</CardTitle>
        <CardDescription>Company overview and key information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm">{description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Founded:</strong> {founded}
            </div>
            <div>
              <strong>Headquarters:</strong> {headquarters}
            </div>
            <div>
              <strong>Employees:</strong> {employees}
            </div>
            <div>
              <strong>Industry:</strong> {industry}
            </div>
          </div>
          <div>
            <strong>Key Products/Services:</strong>
            <ul className="list-disc list-inside mt-2 text-sm">
              {keyProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
