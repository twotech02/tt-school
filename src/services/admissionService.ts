export interface AdmissionEnquiryPayload {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  grade: string;
  preferredCampus?: string;
  message?: string;
  entryYear?: string;
}

export interface ServiceResponse {
  success: boolean;
  message: string;
  referenceNumber?: string;
}

export const admissionService = {
  async submitEnquiry(payload: AdmissionEnquiryPayload): Promise<ServiceResponse> {
    // Simulate real network request
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!payload.parentName || !payload.studentName || !payload.email || !payload.grade) {
      return {
        success: false,
        message: 'Please complete all required fields.',
      };
    }

    const ref = `EVF-${Date.now().toString().slice(-6)}`;
    return {
      success: true,
      message: `Enquiry successfully received. Our Admissions Dean will reach out within 24 hours.`,
      referenceNumber: ref,
    };
  },
};

export default admissionService;
