export const createFilterFingerprint = (filters: Record<string, unknown>) => {
	return Object.keys(filters).length;
};
