export interface CampusVisitPayload {
  parentName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTimeSlot: string;
  gradeOfInterest: string;
  attendeeCount: number;
  specificInterests?: string[];
}

export interface VisitResponse {
  success: boolean;
  message: string;
  confirmationCode?: string;
}

export const campusVisitService = {
  async bookVisit(payload: CampusVisitPayload): Promise<VisitResponse> {
    await new Promise((resolve) => setTimeout(resolve, 850));

    if (!payload.parentName || !payload.email || !payload.phone || !payload.preferredDate) {
      return {
        success: false,
        message: 'Please fill in parent name, contact information, and desired date.',
      };
    }

    const code = `VISIT-${Date.now().toString().slice(-5)}`;
    return {
      success: true,
      message: `Your campus tour has been reserved for ${payload.preferredDate} (${payload.preferredTimeSlot}). Check your inbox for arrival instructions and parking details.`,
      confirmationCode: code,
    };
  },
};

export default campusVisitService;
