import Page from 'features/page';
import Button from 'ui/form/button';
import InternalLink from 'ui/link/internal';

export default function NotFoundPage() {
  return (
    <Page title="404 Page" noindex>
      <main className="py-4 content md:py-12 lg:py-24">
        <h1 className="text-xl display md:text-2xl lg:text-3xl">Page Not Found</h1>
        <p className="mt-2 body">This page does not exist.</p>
        <InternalLink href="/">
          <Button className="mt-4 btn-primary">Go To Home Page</Button>
        </InternalLink>
      </main>
    </Page>
  );
}
