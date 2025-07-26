"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';

interface ClientLinkProps {
  to: string;
  text: string;
}
export default function ClientLink({ to, text }: ClientLinkProps) {
  return <Link href={to} className="text-primary-blue-600 hover:text-primary-blue-800 inline-flex items-center gap-1">{text} <ArrowRight className="size-3"/> </Link>;
}
