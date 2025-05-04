import { Button } from "@/app/components/ui/button";
import { Card, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import Layout from "@/app/components/Layout";

const Communication = () => {
  return (
    <>
      <h2 className="title">Communications</h2>
      <Layout>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6">
          <Input placeholder="Search..." className="sm:flex-1mr-2" />
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Group</Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 w-full">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <Card className="border border-blue-500 space-y-2" key={i}>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-blue-700 uppercase">
                    New
                  </Badge>
                  <CardTitle className="title">Message Title</CardTitle>
                </div>
                <p className="title-sm">
                  This is a short preview or context of the message.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium beatae suscipit optio animi impedit quam
                  accusantium maiores expedita illum consectetur nesciunt
                  quaerat sequi porro veritatis nisi earum, voluptatum sunt
                  asperiores perferendis quis voluptates dicta, vero doloribus!
                  Fuga cumque vel animi natus provident rerum asperiores
                  veritatis? Eveniet corporis provident dolorum animi.
                </p>
                <Badge
                  variant="outline"
                  className="bg-green-600 text-white border-none"
                >
                  3 attachments
                </Badge>
                <div>
                  <Button variant="secondary" className="mt-2">
                    Reply
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Card className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="bg-blue-700 uppercase">
                  Responded
                </Badge>
                <CardTitle className="title">Message Title</CardTitle>
              </div>
              <p className="title-sm">
                This is a short preview or context of the message.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium beatae suscipit optio animi impedit quam accusantium
                maiores expedita illum consectetur nesciunt quaerat sequi porro
              </p>
            </Card>
            <Card className="space-y-2">
              <div className="flex items-center gap-2">
                <CardTitle className="title">Message Title</CardTitle>
              </div>
              <p className="title-sm">
                This is a short preview or context of the message.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium beatae suscipit optio animi impedit quam accusantium
                maiores expedita illum consectetur nesciunt quaerat sequi porro
              </p>
              <Badge
                variant="outline"
                className="bg-green-600 text-white border-none"
              >
                3 attachments
              </Badge>
              <div>
                <Button variant="secondary" className="mt-2">
                  Reply
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Communication;
