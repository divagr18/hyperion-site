"use server";

export async function submitBetaRequest(formData: FormData) {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const llmSpend = formData.get("llmSpend") as string;
    const useCase = formData.get("useCase") as string;

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID) {
        console.error("Airtable environment variables are missing.");
        return { success: false, error: "Configuration error" };
    }

    try {
        const response = await fetch(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    records: [
                        {
                            fields: {
                                "fldr1BdsLGdGzlFaE": fullName,
                                "fldDyjfF2spEAJtD8": email,
                                "fldWrbPBKTzGzhakN": company || "N/A",
                                "fldPqUyYHU72vRolK": llmSpend,
                                "fldxotsCcNFlVWrFr": useCase,
                            },
                        },
                    ],
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Airtable error:", errorData);
            return { success: false, error: "Failed to submit request" };
        }

        return { success: true };
    } catch (error) {
        console.error("Submission error:", error);
        return { success: false, error: "Network error" };
    }
}
