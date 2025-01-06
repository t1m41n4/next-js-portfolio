import Intro from "@/components/intro";
import RecentProjects from "@/components/recent-projects";
import {MDXRemote} from 'next-mdx-remote/rsc'

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />

        <RecentProjects />
      </div>
    </section>
  )
}