import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";

const ProductCard = ({ product }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{product.productname}</CardTitle>
        <CardDescription>${product.price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
