import { useRouter } from "next/router";

const EntradaBlog = () => {
  const router = useRouter();
  const {query}=router;
  
  return <div>EntradaBlog</div>;
};

export default EntradaBlog;
