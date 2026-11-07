const inquiriesQueue = [];

function cleanField(value = '', maxLength = 500) {
  return String(value).trim().slice(0, maxLength);
}

export async function createInquiry(req, res, next) {
  try {
    const name = cleanField(req.body.name, 100);
    const phone = cleanField(req.body.phone, 30);
    const email = cleanField(req.body.email, 140);
    const city = cleanField(req.body.city, 100);
    const serviceType = cleanField(req.body.serviceType, 160);
    const waterTds = cleanField(req.body.waterTds, 120);
    const notes = cleanField(req.body.notes, 2000);

    if (!name || !phone || !email || !city || !notes) {
      return res.status(400).json({
        ok: false,
        error: 'Name, phone, email, city, and setup notes are required',
      });
    }

    const record = {
      id: `inq-${Date.now()}`,
      name,
      phone,
      email,
      city,
      serviceType,
      waterTds,
      notes,
      createdAt: new Date().toISOString(),
    };

    // TODO (DB / Email Integration): Save to inquiries table and trigger email notification to info@tehrov.in
    inquiriesQueue.push(record);

    return res.status(201).json({
      ok: true,
      inquiryId: record.id,
      submittedAt: record.createdAt,
    });
  } catch (err) {
    return next(err);
  }
}