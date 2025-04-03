
import Navbar from "../components/Navbar";
import LatestNewsSection from "../components/Blog/BlogHero";
import BlogLayout from "../components/Blog/BlogLayout";
import ImageCardGrid from "../components/Blog/BlogCard";
import BusinessContactSection from "../components/FreeConsultant";
import Footer from "../components/Footer";







function BlogPage() {
    return (
      <div>
        <Navbar />
        <LatestNewsSection />
        <BlogLayout />
        <ImageCardGrid />
        <BusinessContactSection />
       
       
       
       
        <Footer />
       
      </div>
    );
  }
  
  export default BlogPage;
  