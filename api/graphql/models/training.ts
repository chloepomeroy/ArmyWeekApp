export interface Training {
    id: string;
    title: string;
    description: string;
    imageFileName: string;
    imageUrl: string;
    submitter: string;
    subject: string;
    skills: [string];
    level: string;
    duration: string;
    learningPathway: [string];
    trainingLink: string;
    educator: string;
}