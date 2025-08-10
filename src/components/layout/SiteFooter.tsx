export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Browse Boost. All rights reserved.</p>
      </div>
    </footer>
  );
};
