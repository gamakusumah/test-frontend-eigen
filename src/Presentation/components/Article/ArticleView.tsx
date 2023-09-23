import { useEffect } from "react";
import useViewModel from "./ArticleList/ArticleListViewModel";
import { Typography, Image } from "antd";
import { useParams } from "react-router";

const { Title, Paragraph, Text, Link } = Typography;

export default function ArticleView() {
  const { index } = useParams();
  console.log(index);

  const { getArticleByIndex, article } = useViewModel();
  const publishedAt = article?.publishedAt;
  const publishedDate = publishedAt?.replace("T", " ");
  const publishedTime = publishedDate?.replace("Z", "");

  useEffect(() => {
    getArticleByIndex(parseInt(index));
  }, []);

  return (
    <div className="max-w-2xl p-5 mx-auto">
      <div>
        <div className="mb-8 border-b pb-5">
          <Title level={1} style={{ fontWeight: 700 }}>
            {article?.title}
          </Title>
          <Text style={{ fontWeight: 600 }}>
            {article?.author} -{" "}
            <Link href={article?.url}>{article?.source.name} </Link>
            <span className="font-normal text-gray-400">| {publishedTime}</span>
          </Text>
        </div>
        <Image
          preview={false}
          width={"100%"}
          src={article?.urlToImage}
          style={{ objectFit: "cover" }}
          height={350}
        />
      </div>
      <Paragraph style={{ fontSize: 16, marginTop: 30 }}>
        {article?.content}
      </Paragraph>
    </div>
  );
}
