export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  enquiryType: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

export const contactService = {
  async submitContact(payload: ContactFormPayload): Promise<ContactResponse> {
    await new Promise((resolve) => setTimeout(resolve, 750));

    if (!payload.name || !payload.email || !payload.message) {
      return {
        success: false,
        message: 'Name, email and message are mandatory.',
      };
    }

    const ticket = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    return {
      success: true,
      message: 'Thank you for reaching out. A school representative has been assigned to your query.',
      ticketId: ticket,
    };
  },
};

export default contactService;
