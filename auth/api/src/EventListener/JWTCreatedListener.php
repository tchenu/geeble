<?php

namespace App\EventListener;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JWTCreatedListener
{
    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack, EntityManagerInterface $entityManagerInterface)
    {
        $this->requestStack = $requestStack;
        $this->manager = $entityManagerInterface;
    }

    /**
     * @param JWTCreatedEvent $event
     *
     * @return void
     */
    public function onJWTCreated(JWTCreatedEvent $event)
    {
        $payload = $event->getData();

        $userRepository = $this->manager->getRepository(User::class);

        $payload['id'] = $event->getUser()->getUserIdentifier();
        $payload['company_id'] = $userRepository->find($event->getUser()->getUserIdentifier())?->getCompany()?->getId();

        $event->setData($payload);
    }
}
