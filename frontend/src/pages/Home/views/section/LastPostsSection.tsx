import { Alert, Grid, Pagination, Typography } from '@mui/material';

import { PostCard } from '#modules/post/view/PostCard/PostCard';
import { PostCardSkeleton } from '#modules/post/view/PostCard/PostCardSkeleton';
import { useLastPostsQuery } from '#pages/Home/hooks/useLastPosts.query';
import { Section } from '#shared/components/Section/Section';
import { useTranslation } from '#shared/i18n/useTranslation';
import { arrayRange } from '#shared/utils/arrayRange';

const NUMBER_OF_POSTS = 3;

interface LastPostsSectionProps {
  enabled: boolean;
}

export function LastPostsSection({ enabled }: LastPostsSectionProps) {
  const { t } = useTranslation();
  const postsQuery = useLastPostsQuery(NUMBER_OF_POSTS, { enabled });

  if (postsQuery.isLoading) {
    return (
      <Section title={t('home.postSection.title')}>
        <Grid container spacing={1}>
          {arrayRange(NUMBER_OF_POSTS).map((_, index) => (
            <Grid key={index} xs={12} sm={6} md={4} item>
              <PostCardSkeleton />
            </Grid>
          ))}
        </Grid>
      </Section>
    );
  }

  if (postsQuery.isError) {
    if (postsQuery.page > 1) postsQuery.setPage(1);
    return (
      <Section title={t('home.postSection.title')}>
        <Alert severity="error" sx={{ width: 'max-content' }}>
          {t('home.postSection.error')}
        </Alert>
      </Section>
    );
  }

  const lastPosts = postsQuery.data.results;

  if (lastPosts.length === 0) {
    return (
      <Section title={t('home.postSection.title')}>
        <Typography>{t('home.postSection.isEmpty')}</Typography>
      </Section>
    );
  }

  return (
    <Section title={t('home.postSection.title')}>
      <Grid spacing={1} container>
        {lastPosts.map((post) => (
          <Grid key={post.id} xs={12} sm={6} md={4} item>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
      {postsQuery.data.numPages > 1 && (
        <Pagination
          count={postsQuery.data.numPages}
          page={postsQuery.page}
          onChange={(e, val) => postsQuery.setPage(val)}
          sx={{ mt: 1 }}
        />
      )}
    </Section>
  );
}
