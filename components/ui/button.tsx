import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

// Restyled to design-system.md: rectangular, 2px radius, tracked uppercase
// label. Focus styling comes from the global :focus-visible rule in globals.css
// (royal on light, bronze inside .on-dark), so no ring utilities here.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-sm border-2 border-transparent bg-clip-padding text-sm font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-colors duration-150 ease-out select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // primary on light backgrounds
        default: "bg-navy-800 text-white hover:bg-navy-900",
        // primary on navy backgrounds: the main call to action
        accent: "bg-bronze-500 text-navy-950 hover:bg-bronze-400",
        // secondary on light backgrounds
        outline:
          "border-navy-800 bg-transparent text-navy-800 hover:bg-navy-800 hover:text-white aria-expanded:bg-navy-800 aria-expanded:text-white",
        // secondary on navy backgrounds
        "outline-light":
          "border-silver-300 bg-transparent text-white hover:bg-silver-300 hover:text-navy-950",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-silver-200 aria-expanded:bg-silver-200",
        ghost:
          "hover:bg-muted hover:text-navy-800 aria-expanded:bg-muted aria-expanded:text-navy-800",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        link: "border-0 tracking-normal text-navy-800 normal-case underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 gap-2 px-6",
        xs: "h-8 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1.5 px-4 text-[0.8125rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 gap-2.5 px-8 text-[0.9375rem]",
        icon: "size-12",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
