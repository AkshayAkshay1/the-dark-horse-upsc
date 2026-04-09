import { courses } from '@/lib/courses';
import CheckoutClient from './CheckoutClient';

export function generateStaticParams() {
  const params: { courseId: string }[] = [];
  for (const course of courses) {
    params.push({ courseId: course.id });
    if (course.modules) {
      for (const mod of course.modules) {
        params.push({ courseId: mod.id });
      }
    }
  }
  return params;
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  return <CheckoutClient courseId={courseId} />;
}
