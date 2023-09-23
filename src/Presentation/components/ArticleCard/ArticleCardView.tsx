import { Card, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

type CardProps = {
  index: number;
  imgSrc: string;
  publishedAt: string;
  children: React.ReactNode;
};

export default function ArticleCardView(props: CardProps) {
  const { index, imgSrc, publishedAt, children } = props;
  const publishedDate = publishedAt.replace("T", " ");
  const publishedTime = publishedDate.replace("Z", "");
  return (
    <Link href={`/article/${index}`}>
      <Card
        hoverable
        style={{ width: 330, padding: 0, height: "100%" }}
        cover={
          <img
            alt="example"
            src={imgSrc}
            style={{ height: 200, objectFit: "cover" }}
          />
        }
        bodyStyle={{ padding: 15 }}
      >
        {children}
        <Text style={{ color: "gray" }}>
          <span className="font-semibold color">Published at :</span>{" "}
          {publishedTime}
        </Text>
      </Card>
    </Link>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Title
      level={4}
      style={{ fontWeight: 700, lineHeight: 1.2 }}
      ellipsis={{ rows: 3 }}
    >
      {children}
    </Title>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paragraph
      ellipsis={{ rows: 4 }}
      style={{ marginTop: 15, marginBottom: 20, color: "gray" }}
    >
      {children}
    </Paragraph>
  );
};

ArticleCardView.Header = Header;
ArticleCardView.Body = Body;
