import { EventProps } from '../../../Props/Event';

export function createTestEvent(
  slug = 'The slug',
  title = 'The test event',
  beginDate = new Date('2023-02-17T03:24:00'),
  endDate = new Date('2023-02-17T04:24:00'),
  description = 'This is an event to test',
  effectiveSize = 1,
  globalSize = 1,
  position = 0,
  placed = false,
  getAbsoluteUrl = 'https://nantral-platform.fr/account/login/?next=/',
  groupName = 'Moi-même',
  groupSlug = 'Mon groupe',
  image = null,
  color = 'blue',
  isMember = true,
  isParticipating = true,
  location = 'My home',
  numberOfParticipants = 15,
  publicity: 'Pub' = 'Pub',
  maxParticipant = null,
  endInscription = null,
  beginInscription = null,
  formUrl = null,
  isFavorite = true
) {
  const event: EventProps = {
    color: color,
    beginDate: beginDate,
    endDate: endDate,
    description: description,
    getAbsoluteUrl: getAbsoluteUrl,
    groupName: groupName,
    groupSlug: groupSlug,
    image: image,
    isMember: isMember,
    isParticipating: isParticipating,
    location: location,
    numberOfParticipants: numberOfParticipants,
    publicity: publicity,
    slug: slug,
    title: title,
    maxParticipant: maxParticipant,
    endInscription: endInscription,
    beginInscription: beginInscription,
    formUrl: formUrl,
    isFavorite: isFavorite,
    effectiveSize: effectiveSize,
    globalSize: globalSize,
    position: position,
    placed: placed,
  };

  return event;
}
