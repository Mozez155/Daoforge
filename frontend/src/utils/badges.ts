/**
 * Badge type definitions, display names, descriptions, and voting weight calculations.
 * Badge IDs correspond to the on-chain Badge enum in the DaoForge contract.
 */

export enum BadgeType {
  CORE = "Core",
  ACTIVE = "Active",
  CONTRIBUTOR = "Contributor",
  COMMUNITY = "Community",
}

export interface BadgeInfo {
  id: BadgeType;
  label: string;
  description: string;
  votingWeight: number;
  color: string;
}

export const BADGE_REGISTRY: Record<BadgeType, BadgeInfo> = {
  [BadgeType.CORE]: {
    id: BadgeType.CORE,
    label: "Core",
    description: "Core maintainer with full governance rights.",
    votingWeight: 10,
    color: "bg-purple-100 text-purple-800",
  },
  [BadgeType.ACTIVE]: {
    id: BadgeType.ACTIVE,
    label: "Active",
    description: "Active contributor with elevated voting power.",
    votingWeight: 5,
    color: "bg-blue-100 text-blue-800",
  },
  [BadgeType.CONTRIBUTOR]: {
    id: BadgeType.CONTRIBUTOR,
    label: "Contributor",
    description: "Regular contributor with standard voting rights.",
    votingWeight: 2,
    color: "bg-green-100 text-green-800",
  },
  [BadgeType.COMMUNITY]: {
    id: BadgeType.COMMUNITY,
    label: "Community",
    description: "Community member with basic voting rights.",
    votingWeight: 1,
    color: "bg-zinc-100 text-zinc-700",
  },
};

/** Get badge info by type ID string */
export function getBadgeInfo(badgeType: string): BadgeInfo | undefined {
  return BADGE_REGISTRY[badgeType as BadgeType];
}

/** Get voting weight multiplier for a badge type */
export function getBadgeWeight(badgeType: string): number {
  return BADGE_REGISTRY[badgeType as BadgeType]?.votingWeight ?? 1;
}

/** Get the maximum voting weight from a list of badge types */
export function getMaxVotingWeight(badges: string[]): number {
  if (!badges.length) return 0;
  return Math.max(...badges.map(getBadgeWeight));
}

/** Check if an address holds a specific badge (client-side helper) */
export function hasBadge(badges: string[], badgeType: BadgeType): boolean {
  return badges.includes(badgeType);
}
