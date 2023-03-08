// <import components
import { Header } from "@/app/components";
// import components>

export default function publicLayout({ children }: { children: React.ReactNode }) {

    return (
      <div>
        <Header/>
        {children}
      </div>
    )
};